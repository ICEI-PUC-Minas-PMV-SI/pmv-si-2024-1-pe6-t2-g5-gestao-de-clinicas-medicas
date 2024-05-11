import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css'],
})
export class ClinicaComponent implements OnInit {
  public clinicaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.clinicaForm = this.formBuilder.group({
      razaoSocial: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
    });
  }

  form() {
    console.log('FORM', this.clinicaForm);
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
