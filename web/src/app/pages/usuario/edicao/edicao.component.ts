import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from 'src/app/common/util/util.service';
import { UsuarioService } from '../usuario.service';
import { UsuarioVO } from 'src/app/model/vo/UsuarioVO';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public usuarioForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dados: any,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.buscarUsuario(this.dados.idUsuario);
  }

  initForm() {
    this.usuarioForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
    });
  }

  buscarUsuario(id: number) {
    this.usuarioService.buscarPorId(id).subscribe((rs: any) => {
      this.preencherForm(rs.data[0]);
    });
  }

  preencherForm(dados: any) {
    this.usuarioForm.patchValue({
      id: dados.id,
      email: dados.email,
      senha: dados.senha,
      tipo: dados.tipo.toLowerCase(),
    });
  }

  atualizar() {
    if (this.usuarioForm.valid) {
      const usuario: UsuarioVO = {
        id: this.usuarioForm.get('id')?.value,
        email: this.usuarioForm.get('email')?.value,
        senha: this.usuarioForm.get('senha')?.value,
        tipo: this.usuarioForm.get('tipo')?.value,
      };

      if (usuario.id != null) {
        this.usuarioService.atualizar(usuario.id, usuario).subscribe((rs) => {
          location.reload();
        });
      } else {
        const message = 'USUARIO NÃO ENCONTRADO';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      }
    } else {
      if (this.usuarioForm.controls['email'].errors) {
        const message = 'E-MAIL INVÁLIDO';
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
