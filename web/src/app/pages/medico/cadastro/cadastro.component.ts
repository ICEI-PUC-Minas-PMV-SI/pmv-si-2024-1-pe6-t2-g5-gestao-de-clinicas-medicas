import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MedicoVO } from 'src/app/model/vo/MedicoVO';
import { MedicoService } from '../medico.service';
import { UtilService } from '../../../common/util/util.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public medicoForm!: FormGroup;
  public especialidades: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<any>,
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getEspecialidades();
  }

  initForm() {
    this.medicoForm = this.formBuilder.group({
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(45),
      ]),
      crm: new FormControl('', [Validators.required]),
      especialidade: new FormControl('', [Validators.required]),
    });
  }

  getEspecialidades() {
    this.especialidades = this.medicoService.getEspecialidades();
  }

  salvar() {
    if (this.medicoForm.valid) {
      const medico: MedicoVO = {
        nome: this.medicoForm.get('nome')?.value,
        crm: this.medicoForm.get('crm')?.value,
        especialidade: this.medicoForm.get('especialidade')?.value,
      };

      this.medicoService.cadastrar(medico).subscribe((rs) => {
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
