import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilService } from 'src/app/common/util.service';
import { UsuarioService } from '../usuario.service';
import { UsuarioVO } from 'src/app/model/vo/UsuarioVO';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public idUsuario!: number;
  public usuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.buscarUsuario();
  }

  buscarUsuario() {
    this.usuarioService.buscarPorId(this.idUsuario).subscribe((rs) => {
      console.log('BUSCA USUARIO POR ID', rs);
      //this.initForm(rs.data);
    });
  }

  initForm() {
    this.usuarioForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
    });
  }

  atualizar() {
    if (this.usuarioForm.valid) {
      const usuario: UsuarioVO = {
        email: this.usuarioForm.get('email')?.value,
        senha: this.usuarioForm.get('senha')?.value,
        tipo: this.usuarioForm.get('tipo')?.value,
      };

      if (usuario.id != null) {
        this.usuarioService
          .cadastrar(usuario)
          .subscribe((rs) => console.log('EDICAO USUARIO', rs));
      } else {
        const message = 'USUARIO NÃO ENCONTRADO';
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
