import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-redefinicao-senha',
  templateUrl: './redefinicao-senha.component.html',
  styleUrls: ['./redefinicao-senha.component.css'],
})
export class RedefinicaoSenhaComponent implements OnInit {
  public recuperarSenhaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.recuperarSenhaForm = this.formBuilder.group({
      senhaAtual: new FormControl('', [Validators.required]),
      senhaNova: new FormControl('', [Validators.required]),
    });
  }

  salvarSenha() {}
}
