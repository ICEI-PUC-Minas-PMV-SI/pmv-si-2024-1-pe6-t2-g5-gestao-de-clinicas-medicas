import { Time } from '@angular/common';
import { StatusConsultaEnum } from '../enum/StatusConsulta.enum';

export interface ConsultaVO {
  id?: number;
  idmedico: number;
  idpaciente: number;
  data: string;
  horario_inicio: string;
  horario_fim: string;
  posicao: string;
  status: StatusConsultaEnum;
}
