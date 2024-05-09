import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MedicoVO } from 'src/app/model/vo/MedicoVO';
import { MedicoService } from '../medico.service';
import { UtilService } from './../../../common/util.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public medicoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private medicoService: MedicoService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
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

  salvar() {
    if (this.medicoForm.valid) {
      const medico: MedicoVO = {
        nome: this.medicoForm.get('nome')?.value,
        crm: this.medicoForm.get('crm')?.value,
        especialidade: this.medicoForm.get('especialidade')?.value,
      };

      this.medicoService
        .cadastrar(medico)
        .subscribe((rs) => console.log('CADASTRO MEDICO', rs));
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
