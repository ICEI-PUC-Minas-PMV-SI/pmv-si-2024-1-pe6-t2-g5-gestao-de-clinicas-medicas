import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StatusConsultaEnum } from 'src/app/model/enum/StatusConsulta.enum';
import { ConsultaVO } from 'src/app/model/vo/ConsultaVO';
import { ConsultaService } from '../consulta.service';
import { UtilService } from './../../../common/util.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public idConsulta!: number;
  public consultaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private utilService: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarConsulta();
  }

  buscarConsulta() {
    this.consultaService.buscarPorId(this.idConsulta).subscribe((rs) => {
      console.log('BUSCA CONSULTA POR ID', rs);
      //this.initForm(rs.data);
    });
  }

  initForm() {
    this.consultaForm = this.formBuilder.group({
      idMedico: new FormControl(1, [Validators.required]),
      idPaciente: new FormControl(2, [Validators.required]),
      data: new FormControl(new Date(), [Validators.required]),
      horario_inicio: new FormControl({ hours: 10, minutes: 0 }, [
        Validators.required,
      ]),
      horario_fim: new FormControl({ hours: 10, minutes: 30 }, [
        Validators.required,
      ]),
      posicao: new FormControl(1, [Validators.required]),
      status: new FormControl(StatusConsultaEnum.CONFIRMADA, [
        Validators.required,
      ]),
    });
  }

  salvar() {
    if (this.consultaForm.valid) {
      const consulta: ConsultaVO = {
        idMedico: this.consultaForm.get('idMedico')?.value,
        idPaciente: this.consultaForm.get('idPaciente')?.value,
        data: this.consultaForm.get('data')?.value,
        horario_inicio: this.consultaForm.get('horario_inicio')?.value,
        horario_fim: this.consultaForm.get('horario_fim')?.value,
        posicao: this.consultaForm.get('posicao')?.value,
        status: this.consultaForm.get('status')?.value,
      };

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
