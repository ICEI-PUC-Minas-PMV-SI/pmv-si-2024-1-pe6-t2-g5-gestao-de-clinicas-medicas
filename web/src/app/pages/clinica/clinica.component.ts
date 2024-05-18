import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/util/util.service';
import { ClinicaVO } from 'src/app/model/vo/ClinicaVO';
import { ClinicaService } from './clinica.service';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css'],
})
export class ClinicaComponent implements OnInit {
  public clinicaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clinicaService: ClinicaService,
    private router: Router,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.buscarClinica();
  }

  initForm() {
    this.clinicaForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
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

  buscarClinica() {
    this.clinicaService.buscar().subscribe((rs: any) => {
      this.preencherForm(rs.data[0]);
    });
  }

  preencherForm(dados: any) {
    this.clinicaForm.patchValue({
      id: dados.id,
      razaoSocial: dados.razao_social,
      cnpj: dados.cnpj,
      telefone: dados.telefone,
      logradouro: dados.logradouro,
      numero: dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      uf: dados.uf,
    });
  }

  atualizar() {
    if (this.clinicaForm.valid) {
      const clinica: ClinicaVO = {
        id: this.clinicaForm.get('id')?.value,
        razao_social: this.clinicaForm.get('razaoSocial')?.value,
        cnpj: this.clinicaForm.get('cnpj')?.value,
        telefone: this.clinicaForm.get('telefone')?.value,
        logradouro: this.clinicaForm.get('logradouro')?.value,
        numero: this.clinicaForm.get('numero')?.value,
        bairro: this.clinicaForm.get('bairro')?.value,
        cidade: this.clinicaForm.get('cidade')?.value,
        uf: this.clinicaForm.get('uf')?.value,
      };

      if (clinica.id != null) {
        this.clinicaService
          .atualizar(clinica.id, clinica)
          .subscribe((rs: any) => {
            location.reload();
          });
      }
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
