import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/util/util.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilService: UtilService,
    public dialog: MatDialog,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  autenticarUsuario() {
    const user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('senha')?.value,
    };
    this.loginService.login(user).subscribe((rs: any) => {
      if (rs && rs.message === 'autenticado') {
        sessionStorage.setItem('token', rs.token);
        this.router.navigateByUrl('home');
        const message = 'Login autenticado';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      } else {
        const message = 'Email ou senha inválido';
        const action = 'OK';
        this.utilService.openSnackBar(message, action);
      }
    });
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
