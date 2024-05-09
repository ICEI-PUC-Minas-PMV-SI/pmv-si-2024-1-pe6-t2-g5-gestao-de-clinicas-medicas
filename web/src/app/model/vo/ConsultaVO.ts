import { Time } from '@angular/common';
import { StatusConsultaEnum } from '../enum/StatusConsulta.enum';

export interface ConsultaVO {
  id?: number;
  idMedico: number;
  idPaciente: number;
  data: Date;
  horario_inicio: Date;
  horario_fim: Date;
  posicao: number;
  status: StatusConsultaEnum;
}
