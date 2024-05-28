import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspecialidadeEnum } from 'src/app/model/enum/Especialidade.enum';
import { MedicoVO } from 'src/app/model/vo/MedicoVO';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  private readonly API =
    'http://ec2-18-214-226-89.compute-1.amazonaws.com/medicos';
  public tokenAPI: any;
  public httpOptions: any;

  constructor(private http: HttpClient) {
    const token = sessionStorage.getItem('token');
    this.tokenAPI = 'Bearer ' + token;
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.tokenAPI,
      }),
    };
  }

  buscarTodos() {
    return this.http.get(this.API, this.httpOptions);
  }

  buscarPorId(id: number) {
    return this.http.get(`${this.API}/id/${id}`, this.httpOptions);
  }

  cadastrar(medico: MedicoVO) {
    return this.http.post(this.API, medico, this.httpOptions);
  }

  atualizar(id: number, medico: MedicoVO) {
    return this.http.put(`${this.API}/${id}`, medico, this.httpOptions);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`, this.httpOptions);
  }

  getEspecialidades(): string[] {
    return [
      EspecialidadeEnum.CLINICO_GERAL,
      EspecialidadeEnum.CARDIOLOGIA,
      EspecialidadeEnum.ORTOPEDIA,
      EspecialidadeEnum.PEDIATRIA,
      EspecialidadeEnum.OFTALMOLOGIA,
      EspecialidadeEnum.GINECOLOGIA,
      EspecialidadeEnum.PSIQUIATRIA,
      EspecialidadeEnum.NEUROLOGIA,
    ];
  }
}
