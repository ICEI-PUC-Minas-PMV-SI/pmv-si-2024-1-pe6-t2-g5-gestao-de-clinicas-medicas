import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from 'src/app/common/util.service';
import { MedicoVO } from 'src/app/model/vo/MedicoVO';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public idMedico!: number;
  public medicoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.buscarMedico();
  }

  buscarMedico() {
    this.medicoService.buscarPorId(this.idMedico).subscribe((rs) => {
      console.log('BUSCA MEDICO POR ID', rs);
      //this.initForm(rs.data);
    });
  }

  initForm(data: any) {
    this.medicoForm = this.formBuilder.group({
      id: new FormControl(data.id),
      nome: new FormControl(data.nome, [
        Validators.required,
        Validators.maxLength(45),
      ]),
      crm: new FormControl(data.crm, [Validators.required]),
      especialidade: new FormControl(data.especialidade, [Validators.required]),
    });
  }

  atualizar() {
    if (this.medicoForm.valid) {
      const medico: MedicoVO = {
        id: this.medicoForm.get('id')?.value,
        nome: this.medicoForm.get('nome')?.value,
        crm: this.medicoForm.get('crm')?.value,
        especialidade: this.medicoForm.get('especialidade')?.value,
      };

      if (medico.id != null) {
        this.medicoService
          .atualizar(medico.id, medico)
          .subscribe((rs) => console.log('EDICAO MEDICO', rs));
      } else {
        const message = 'MÉDICO NÃO ENCONTRADO';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      }
    } else {
      const message = 'PREENCHA OS CAMPOS OBRIGATÓRIOS ANTES DE SALVAR';
      const action = 'OK';
      this.utilService.openSnackBar(message, action);
    }
  }
}
