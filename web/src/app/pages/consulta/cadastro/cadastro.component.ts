import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConsultaVO } from 'src/app/model/vo/ConsultaVO';
import { PacienteService } from '../../paciente/paciente.service';
import { ConsultaService } from '../consulta.service';
import { UtilService } from '../../../common/util/util.service';
import { MedicoService } from '../../medico/medico.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public consultaForm!: FormGroup;
  public pacientes: any[] = [];
  public medicos: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<any>,
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private utilService: UtilService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.buscarPacientes();
    this.buscarMedicos();
  }

  initForm() {
    this.consultaForm = this.formBuilder.group({
      medico: new FormControl('', [Validators.required]),
      paciente: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      horarioInicio: new FormControl('', [Validators.required]),
      horarioFim: new FormControl('', [Validators.required]),
      // posicao: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  buscarPacientes() {
    this.pacienteService.buscarTodos().subscribe((rs: any) => {
      this.pacientes = rs.data;
    });
  }

  buscarMedicos() {
    this.medicoService.buscarTodos().subscribe((rs: any) => {
      this.medicos = rs.data;
    });
  }

  salvar() {
    if (this.consultaForm.valid) {
      const dataConsulta = this.consultaForm.get('data')?.value;
      const dataConsultaFormatada: string =
        this.utilService.formataDataPadraoBanco(dataConsulta) +
        ' ' +
        '00:00:00';
      const horarioInicio = `08:00`;
      const horarioFim = `09:00`;

      const consulta: ConsultaVO = {
        idmedico: this.consultaForm.get('medico')?.value,
        idpaciente: this.consultaForm.get('paciente')?.value,
        data: dataConsultaFormatada,
        horario_inicio: horarioInicio,
        horario_fim: horarioFim,
        posicao: '1',
        status: this.consultaForm.get('status')?.value,
      };

      this.consultaService.cadastrar(consulta).subscribe((rs) => {
        location.reload();
      });
    } else {
      const message = 'PREENCHA OS CAMPOS OBRIGATÓRIOS ANTES DE SALVAR';
      const action = 'OK';
      this.utilService.openSnackBar(message, action);
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
