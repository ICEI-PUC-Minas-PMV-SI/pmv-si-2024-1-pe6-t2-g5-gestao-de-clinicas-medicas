import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from 'src/app/common/util.service';
import { MedicoVO } from 'src/app/model/vo/MedicoVO';
import { MedicoService } from '../medico.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public medicoForm!: FormGroup;
  public especialidades: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dados: any,
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.buscarMedico(this.dados.idMedico);
    this.getEspecialidades();
  }

  initForm() {
    this.medicoForm = this.formBuilder.group({
      id: new FormControl(''),
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(45),
      ]),
      crm: new FormControl('', [Validators.required]),
      especialidade: new FormControl('', [Validators.required]),
    });
  }

  buscarMedico(id: number) {
    this.medicoService.buscarPorId(id).subscribe((rs: any) => {
      this.preencherForm(rs.data[0]);
    });
  }

  preencherForm(dados: any) {
    this.medicoForm.patchValue({
      id: dados.id,
      nome: dados.nome,
      crm: dados.crm,
      especialidade: dados.especialidade,
    });
  }

  getEspecialidades() {
    this.especialidades = this.medicoService.getEspecialidades();
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
        this.medicoService.atualizar(medico.id, medico).subscribe((rs) => {
          location.reload();
        });
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

  closeModal() {
    this.dialogRef.close();
  }
}
