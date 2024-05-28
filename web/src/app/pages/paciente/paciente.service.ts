import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteVO } from 'src/app/model/vo/PacienteVO';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private readonly API =
    'http://ec2-18-214-226-89.compute-1.amazonaws.com/pacientes';
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

  cadastrar(paciente: PacienteVO) {
    return this.http.post(this.API, paciente, this.httpOptions);
  }

  atualizar(id: number, paciente: PacienteVO) {
    return this.http.put(`${this.API}/${id}`, paciente, this.httpOptions);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`, this.httpOptions);
  }
}
