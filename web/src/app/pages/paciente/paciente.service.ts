import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private readonly API = 'http://localhost:8080/pacientes';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get(this.API);
  }

  buscarPorId(id: number) {
    return this.http.get(`${this.API}/${id}`);
  }

  cadastrar(paciente: PacienteVO) {
    return this.http.post(this.API, paciente);
  }

  atualizar(id: number, paciente: PacienteVO) {
    return this.http.put(`${this.API}/${id}`, paciente);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
