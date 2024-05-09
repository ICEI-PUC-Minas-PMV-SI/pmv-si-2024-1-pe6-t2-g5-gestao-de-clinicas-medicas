import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/util.service';
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
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.usuarioForm = this.formBuilder.group({
      email: new FormControl('teste@gmail.com', [Validators.required]),
      senha: new FormControl('teste', [Validators.required]),
      tipo: new FormControl('paciente', [Validators.required]),
    });
  }

  salvar() {
    if (this.usuarioForm.valid) {
      const usuario: UsuarioVO = {
        email: this.usuarioForm.get('email')?.value,
        tipo: this.usuarioForm.get('tipo')?.value,
      };

      this.usuarioService
        .cadastrar(usuario)
        .subscribe((rs) => console.log('CADASTRO USUARIO', rs));
    } else {
      const message = 'PREENCHA OS CAMPOS OBRIGATÓRIOS ANTES DE SALVAR';
      const action = 'OK';
      this.utilService.openSnackBar(message, action);
    }
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
