import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/util.service';

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
    private utilService: UtilService
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
    const email = this.loginForm.get('email')?.value;
    const senha = this.loginForm.get('senha')?.value;
    if (email == 'a' && senha == '1') {
      this.router.navigateByUrl('home');
    } else {
      const message = 'Email ou senha inválido';
      const action = 'OK';
      this.utilService.openSnackBar(message, action);
    }
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
