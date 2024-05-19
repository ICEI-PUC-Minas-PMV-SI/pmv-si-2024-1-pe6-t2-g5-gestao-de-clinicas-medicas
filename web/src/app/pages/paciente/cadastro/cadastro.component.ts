import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';
import { PacienteService } from '../paciente.service';
import { UtilService } from '../../../common/util/util.service';
import { GenericValidator } from 'src/app/common/util/generic-validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public pacienteForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.pacienteForm = this.formBuilder.group({
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(45),
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.maxLength(14),
        GenericValidator.validaCpf(),
      ]),
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
      const dataNascimento: Date =
        this.pacienteForm.get('dataNascimento')?.value;
      const dataNascimentoFormatada: string =
        this.utilService.formataDataPadraoBanco(dataNascimento);

      const paciente: PacienteVO = {
        nome: this.pacienteForm.get('nome')?.value,
        cpf: this.pacienteForm.get('cpf')?.value,
        data_nascimento: dataNascimentoFormatada,
        telefone: this.pacienteForm.get('telefone')?.value,
        logradouro: this.pacienteForm.get('logradouro')?.value,
        numero: this.pacienteForm.get('numero')?.value,
        bairro: this.pacienteForm.get('bairro')?.value,
        cidade: this.pacienteForm.get('cidade')?.value,
        // uf: this.pacienteForm.get('uf')?.value,
      };

      this.pacienteService.cadastrar(paciente).subscribe((rs) => {
        location.reload();
      });
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
