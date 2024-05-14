import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from 'src/app/common/util.service';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';
import { PacienteService } from '../paciente.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
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
    this.buscarPaciente(this.data.idPaciente);
  }

  buscarPaciente(id: number) {
    this.pacienteService.buscarPorId(id).subscribe((rs: any) => {
      this.preencherForm(rs.data[0]);
    });
  }

  initForm() {
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

  preencherForm(data: any) {
    this.pacienteForm.patchValue({
      id: data.id,
      nome: data.nome,
      cpf: data.cpf,
      dataNascimento: data.dataNascimento,
      telefone: data.telefone,
      logradouro: data.logradouro,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      // uf: data.uf,
    });
  }

  atualizar() {
    if (this.pacienteForm.valid) {
      const paciente: PacienteVO = {
        id: this.pacienteForm.get('id')?.value,
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
      const message = 'PREENCHA OS CAMPOS OBRIGATÓRIOS ANTES DE SALVAR';
      const action = 'OK';
      this.utilService.openSnackBar(message, action);
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
