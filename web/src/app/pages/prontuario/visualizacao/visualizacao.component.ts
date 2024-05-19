import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProntuarioService } from '../prontuario.service';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
})
export class VisualizacaoComponent implements OnInit {
  public pacienteForm!: FormGroup;
  public prontuarioForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dados: any,
    private formBuilder: FormBuilder,
    private prontuarioService: ProntuarioService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.buscarProntuario();
  }

  initForm() {
    this.pacienteForm = this.formBuilder.group({
      id: new FormControl({ value: '', disabled: true }),
      nome: new FormControl({ value: '', disabled: true }),
      cpf: new FormControl({ value: '', disabled: true }),
      dataNascimento: new FormControl({ value: '', disabled: true }),
      telefone: new FormControl({ value: '', disabled: true }),
      logradouro: new FormControl({ value: '', disabled: true }),
      numero: new FormControl({ value: '', disabled: true }),
      bairro: new FormControl({ value: '', disabled: true }),
      cidade: new FormControl({ value: '', disabled: true }),
      // uf: new FormControl({ value: '', disabled: true }),
    });

    this.prontuarioForm = this.formBuilder.group({
      id: new FormControl({ value: '', disabled: true }),
      data: new FormControl({ value: '', disabled: true }),
      medico: new FormControl({ value: '', disabled: true }),
      especialidade: new FormControl({ value: '', disabled: true }),
      historicoMedico: new FormControl({ value: '', disabled: true }),
      diagnostico: new FormControl({ value: '', disabled: true }),
      exames: new FormControl({ value: '', disabled: true }),
      prescricoes: new FormControl({ value: '', disabled: true }),
      tratamentos: new FormControl({ value: '', disabled: true }),
      observacoes: new FormControl({ value: '', disabled: true }),
    });
  }

  buscarProntuario() {
    this.prontuarioService
      .buscarPorId(this.dados.idProntuario)
      .subscribe((rs: any) => {
        this.preencherForm(rs.data[0]);
      });
  }

  preencherForm(dados: any) {
    this.pacienteForm.patchValue({
      id: dados.idpaciente,
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

    this.prontuarioForm.patchValue({
      id: dados.id,
      data: new Date(dados.data_criacao),
      medico: dados.nome_medico,
      especialidade: dados.especialidade,
      historicoMedico: dados.historico_medico,
      diagnostico: dados.diagnostico,
      exames: dados.exames,
      prescricoes: dados.prescricoes,
      tratamentos: dados.tratamentos,
      observacoes: dados.observacoes,
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
