import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { UtilService } from './../../../common/util.service';
import { ConsultaVO } from 'src/app/model/vo/ConsultaVO';
import { StatusConsultaEnum } from 'src/app/model/enum/StatusConsulta.enum';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public consultaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let dataOriginal = new Date();
    let data = `${dataOriginal.getFullYear()}-${dataOriginal.getMonth()}-${dataOriginal.getDay()}`;
    let horarioInicio = `${dataOriginal.getHours()}:${dataOriginal.getMinutes()}`;
    let horarioFim = `${
      dataOriginal.getHours() + 1
    }:${dataOriginal.getMinutes()}`;
    let dataHorario = data + ' ' + horarioInicio;

    this.consultaForm = this.formBuilder.group({
      idMedico: new FormControl(1, [Validators.required]),
      idPaciente: new FormControl(2, [Validators.required]),
      data: new FormControl(dataHorario, [Validators.required]),
      horario_inicio: new FormControl(horarioInicio, [Validators.required]),
      horario_fim: new FormControl(horarioFim, [Validators.required]),
      posicao: new FormControl('1', [Validators.required]),
      status: new FormControl(StatusConsultaEnum.CONCLUIDO, [
        Validators.required,
      ]),
    });
  }

  salvar() {
    if (this.consultaForm.valid) {
      const consulta: ConsultaVO = {
        idmedico: this.consultaForm.get('idMedico')?.value,
        idpaciente: this.consultaForm.get('idPaciente')?.value,
        data: this.consultaForm.get('data')?.value,
        horario_inicio: this.consultaForm.get('horario_inicio')?.value,
        horario_fim: this.consultaForm.get('horario_fim')?.value,
        posicao: this.consultaForm.get('posicao')?.value,
        status: this.consultaForm.get('status')?.value,
      };

      console.log('CONSULTA', consulta);
      this.consultaService
        .cadastrar(consulta)
        .subscribe((rs) => console.log('CADASTRO CONSULTA', rs));
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
