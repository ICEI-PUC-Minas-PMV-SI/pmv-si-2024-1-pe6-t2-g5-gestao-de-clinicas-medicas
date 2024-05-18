import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UtilService } from 'src/app/common/util/util.service';
import { UsuarioVO } from 'src/app/model/vo/UsuarioVO';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public usuarioForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.usuarioForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
    });
  }

  salvar() {
    if (this.usuarioForm.valid) {
      const usuario: UsuarioVO = {
        email: this.usuarioForm.get('email')?.value,
        senha: this.usuarioForm.get('tipo')?.value,
        tipo: this.usuarioForm.get('tipo')?.value,
      };

      this.usuarioService.cadastrar(usuario).subscribe((rs) => {
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
