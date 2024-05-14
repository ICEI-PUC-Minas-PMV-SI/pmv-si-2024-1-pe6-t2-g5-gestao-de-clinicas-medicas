import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspecialidadeEnum } from 'src/app/model/enum/Especialidade.enum';
import { MedicoVO } from 'src/app/model/vo/MedicoVO';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  private readonly API = 'http://localhost:8080/medicos';
  public tokenAPI: any;

  constructor(private http: HttpClient) {}

  buscarTodos() {
    // localStorage.setItem('token', '1dc7eb018f7bc41ba81ede6cfb0bf715036d16b1');
    // const token = localStorage.getItem('token');

    // this.tokenAPI = 'Bearer ' + token;
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: this.tokenAPI,
    //   }),
    // };

    // return this.http.get(this.API, httpOptions);
    return this.http.get(this.API);
  }

  buscarPorId(id: number) {
    return this.http.get(`${this.API}/id/${id}`);
  }

  cadastrar(medico: MedicoVO) {
    return this.http.post(this.API, medico);
  }

  atualizar(id: number, medico: MedicoVO) {
    return this.http.put(`${this.API}/${id}`, medico);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`);
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
