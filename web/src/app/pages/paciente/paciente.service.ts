import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private readonly API =
    'http://ec2-18-214-226-89.compute-1.amazonaws.com/pacientes';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get(this.API);
  }

  buscarPorId(id: number) {
    return this.http.get(`${this.API}/id/${id}`);
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
