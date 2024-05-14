import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';
import { PacienteService } from '../paciente.service';
import { UtilService } from './../../../common/util.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public pacienteForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let data: any = new Date();
    data = `${data.getFullYear()}-${data.getMonth()}-${data.getDay()}`;

    this.pacienteForm = this.formBuilder.group({
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(45),
      ]),
      cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      dataNascimento: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
      ]),
      logradouro: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      // uf: new FormControl('', [Validators.required]),
    });
  }

  salvar() {
    if (this.pacienteForm.valid) {
      const paciente: PacienteVO = {
        nome: this.pacienteForm.get('nome')?.value,
        cpf: this.pacienteForm.get('cpf')?.value,
        data_nascimento: this.pacienteForm.get('dataNascimento')?.value,
        telefone: this.pacienteForm.get('telefone')?.value,
        logradouro: this.pacienteForm.get('logradouro')?.value,
        numero: this.pacienteForm.get('numero')?.value,
        bairro: this.pacienteForm.get('bairro')?.value,
        cidade: this.pacienteForm.get('cidade')?.value,
        // uf: this.pacienteForm.get('uf')?.value,
      };

      console.log('PACIENTE', paciente);
      this.pacienteService
        .cadastrar(paciente)
        .subscribe((rs) => console.log('CADASTRO PACIENTE', rs));
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
