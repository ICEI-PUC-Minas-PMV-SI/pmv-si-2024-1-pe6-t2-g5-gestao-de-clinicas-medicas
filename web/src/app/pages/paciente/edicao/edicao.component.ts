import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from 'src/app/common/util/util.service';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';
import { PacienteService } from '../paciente.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GenericValidator } from 'src/app/common/util/generic-validator';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public pacienteForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dados: any,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.buscarPaciente(this.dados.idPaciente);
  }

  buscarPaciente(id: number) {
    this.pacienteService.buscarPorId(id).subscribe((rs: any) => {
      this.preencherForm(rs.data[0]);
    });
  }

  initForm() {
    this.pacienteForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
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

  preencherForm(dados: any) {
    this.pacienteForm.patchValue({
      id: dados.id,
      nome: dados.nome,
      cpf: dados.cpf,
      dataNascimento: new Date(dados.data_nascimento + 'T00:00'),
      telefone: dados.telefone,
      logradouro: dados.logradouro,
      numero: dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      // uf: dados.uf,
    });
  }

  atualizar() {
    if (this.pacienteForm.valid) {
      const dataNascimento: Date =
        this.pacienteForm.get('dataNascimento')?.value;
      const dataNascimentoFormatada: string =
        this.utilService.formataDataPadraoBanco(dataNascimento);

      const paciente: PacienteVO = {
        id: this.pacienteForm.get('id')?.value,
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

      if (paciente.id != null) {
        this.pacienteService
          .atualizar(paciente.id, paciente)
          .subscribe((rs) => {
            location.reload();
          });
      } else {
        const message = 'PACIENTE NÃO ENCONTRADO';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      }
    } else {
      if (this.pacienteForm.controls['cpf'].errors) {
        const message = 'CPF INVÁLIDO';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      } else if (this.pacienteForm.controls['telefone'].errors) {
        const message = 'TELEFONE INVÁLIDO';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      } else {
        const message = 'PREENCHA OS CAMPOS OBRIGATÓRIOS ANTES DE SALVAR';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      }
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
