import { Time } from '@angular/common';
import { StatusConsultaEnum } from '../enum/StatusConsulta.enum';

export interface ConsultaVO {
  id?: number;
  idmedico: number;
  idpaciente: number;
  data: Date;
  horario_inicio: Date;
  horario_fim: Date;
  posicao: number;
  status: StatusConsultaEnum;
}
