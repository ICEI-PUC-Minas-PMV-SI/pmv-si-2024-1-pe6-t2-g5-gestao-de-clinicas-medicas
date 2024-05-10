import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/util.service';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public pacienteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let data: any = new Date();
    data = `${data.getFullYear()}-${data.getMonth()}-${data.getDay()}`;

    this.pacienteForm = this.formBuilder.group({
      nome: new FormControl('TESTE', [
        Validators.required,
        Validators.maxLength(45),
      ]),
      dataNascimento: new FormControl(data, [Validators.required]),
      cpf: new FormControl('2434', [
        Validators.required,
        Validators.maxLength(11),
      ]),
      telefone: new FormControl('3523552', [
        Validators.required,
        Validators.maxLength(11),
      ]),
      logradouro: new FormControl('TESTE', [Validators.required]),
      numero: new FormControl('1', [Validators.required]),
      bairro: new FormControl('TESTE', [Validators.required]),
      cidade: new FormControl('TESTE', [Validators.required]),
    });
  }

  salvar() {
    if (this.pacienteForm.valid) {
      const paciente: PacienteVO = {
        nome: this.pacienteForm.get('nome')?.value,
        data_nascimento: this.pacienteForm.get('dataNascimento')?.value,
        cpf: this.pacienteForm.get('cpf')?.value,
        telefone: this.pacienteForm.get('telefone')?.value,
        logradouro: this.pacienteForm.get('logradouro')?.value,
        numero: this.pacienteForm.get('numero')?.value,
        bairro: this.pacienteForm.get('bairro')?.value,
        cidade: this.pacienteForm.get('cidade')?.value,
      };

      console.log('PACIENTE', paciente);
      this.pacienteService
        .cadastrar(paciente)
        .subscribe((rs) => console.log('CADASTRO PACIENTE', rs));
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
