import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConsultaVO } from 'src/app/model/vo/ConsultaVO';
import { MedicoService } from '../../medico/medico.service';
import { PacienteService } from '../../paciente/paciente.service';
import { ConsultaService } from '../consulta.service';
import { UtilService } from '../../../common/util/util.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  public consultaForm!: FormGroup;
  public pacientes: any[] = [];
  public medicos: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dados: any,
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private utilService: UtilService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService
  ) {}

  async ngOnInit(): Promise<void> {
    this.initForm();
    this.pacientes = await this.buscarPacientes();
    this.medicos = await this.buscarMedicos();
    this.buscarConsulta(this.dados.idConsulta);
  }

  initForm() {
    this.consultaForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      medico: new FormControl('', [Validators.required]),
      paciente: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      horarioInicio: new FormControl('', [Validators.required]),
      horarioFim: new FormControl('', [Validators.required]),
      posicao: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  buscarConsulta(id: number) {
    this.consultaService.buscarPorId(id).subscribe((rs: any) => {
      this.preencherForm(rs.data[0]);
    });
  }

  buscarPacientes(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.pacienteService.buscarTodos().subscribe((rs: any) => {
        if (rs.data) {
          resolve(rs.data);
        } else {
          reject();
        }
      });
    });
  }

  buscarMedicos(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.medicoService.buscarTodos().subscribe((rs: any) => {
        if (rs.data) {
          resolve(rs.data);
        } else {
          reject();
        }
      });
    });
  }

  preencherForm(dados: any) {
    this.consultaForm.patchValue({
      id: dados.id,
      medico: this.getObjectMedico(dados.idmedico).id,
      paciente: this.getObjectPaciente(dados.idpaciente).id,
      data: new Date(dados.data),
      horarioInicio: dados.horario_inicio,
      horarioFim: dados.horario_fim,
      posicao: dados.posicao,
      status: dados.status,
    });
  }

  getObjectMedico(id: number) {
    return this.medicos.filter((medico) => medico.id == id)[0];
  }

  getObjectPaciente(id: number) {
    return this.pacientes.filter((paciente) => paciente.id == id)[0];
  }

  atualizar() {
    if (this.consultaForm.valid) {
      const dataConsulta = this.consultaForm.get('data')?.value;
      const dataConsultaFormatada: string =
        this.utilService.formataDataPadraoBanco(dataConsulta) +
        ' ' +
        '00:00:00';
      const horarioInicio = `08:00`;
      const horarioFim = `09:00`;

      const consulta: ConsultaVO = {
        id: this.consultaForm.get('id')?.value,
        idmedico: this.consultaForm.get('medico')?.value,
        idpaciente: this.consultaForm.get('paciente')?.value,
        data: dataConsultaFormatada,
        horario_inicio: horarioInicio,
        horario_fim: horarioFim,
        posicao: this.consultaForm.get('posicao')?.value.toString(),
        status: this.consultaForm.get('status')?.value,
      };

      if (consulta.id != null) {
        this.consultaService
          .atualizar(consulta.id, consulta)
          .subscribe((rs) => {
            location.reload();
          });
      }
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
