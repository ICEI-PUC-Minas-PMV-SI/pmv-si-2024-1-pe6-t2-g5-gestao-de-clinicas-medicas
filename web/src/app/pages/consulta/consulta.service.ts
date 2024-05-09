import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultaVO } from 'src/app/model/vo/ConsultaVO';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  private readonly API = 'http://localhost:8080/consultas';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get(this.API);
  }

  buscarPorId(id: number) {
    return this.http.get(`${this.API}/${id}`);
  }

  cadastrar(consulta: ConsultaVO) {
    return this.http.post(this.API, consulta);
  }

  atualizar(id: number, consulta: ConsultaVO) {
    return this.http.put(`${this.API}/${id}`, consulta);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
