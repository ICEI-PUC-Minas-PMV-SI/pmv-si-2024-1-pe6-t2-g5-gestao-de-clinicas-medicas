export interface ProntuarioVO {
  id?: number;
  idConsulta: number;
  dataCriacao: Date;
  historicoMedico: string;
  diagnostico: string;
  exames: string;
  prescricoes: string;
  tratamentos: string;
  observacoes: string;
  hashMedico: string;
}
