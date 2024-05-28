import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProntuarioVO } from 'src/app/model/vo/ProntuarioVO';

@Injectable({
  providedIn: 'root',
})
export class ProntuarioService {
  private readonly API =
    'http://ec2-18-214-226-89.compute-1.amazonaws.com/prontuarios';
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

  cadastrar(prontuario: ProntuarioVO) {
    return this.http.post(this.API, prontuario, this.httpOptions);
  }

  atualizar(id: number, prontuario: ProntuarioVO) {
    return this.http.put(`${this.API}/${id}`, prontuario, this.httpOptions);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`, this.httpOptions);
  }
}
