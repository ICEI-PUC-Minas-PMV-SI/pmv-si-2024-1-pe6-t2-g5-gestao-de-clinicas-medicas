import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from 'src/app/common/util.service';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public idPaciente!: number;
  public pacienteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.buscarPaciente();
  }

  buscarPaciente() {
    this.pacienteService.buscarPorId(this.idPaciente).subscribe((rs) => {
      console.log('BUSCA PACIENTE POR ID', rs);
      //this.initForm(rs.data);
    });
  }

  initForm() {
    this.pacienteForm = this.formBuilder.group({
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(45),
      ]),
      dataNascimento: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
      ]),
      cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      logradouro: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
    });
  }

  atualizar() {
    if (this.pacienteForm.valid) {
      const paciente: PacienteVO = {
        nome: this.pacienteForm.get('nome')?.value,
        data_nascimento: this.pacienteForm.get('dataNascimento')?.value,
        cpf: this.pacienteForm.get('cpf')?.value,
        telefone: this.pacienteForm.get('telefone')?.value,
        logradouro: this.pacienteForm.get('logradouro')?.value,
        numero: this.pacienteForm.get('numero')?.value,
        bairro: this.pacienteForm.get('bairro')?.value,
        cidade: this.pacienteForm.get('cidade')?.value,
      };

      if (paciente.id != null) {
        this.pacienteService
          .cadastrar(paciente)
          .subscribe((rs) => console.log('EDICAO PACIENTE', rs));
      } else {
        const message = 'PACIENTE NÃO ENCONTRADO';
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
