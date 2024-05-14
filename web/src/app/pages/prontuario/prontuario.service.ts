import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProntuarioVO } from 'src/app/model/vo/ProntuarioVO';

@Injectable({
  providedIn: 'root',
})
export class ProntuarioService {
  private readonly API = 'http://localhost:8080/prontuarios';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get(this.API);
  }

  buscarPorId(id: number) {
    return this.http.get(`${this.API}/id/${id}`);
  }

  cadastrar(prontuario: ProntuarioVO) {
    return this.http.post(this.API, prontuario);
  }

  atualizar(id: number, prontuario: ProntuarioVO) {
    return this.http.put(`${this.API}/${id}`, prontuario);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
