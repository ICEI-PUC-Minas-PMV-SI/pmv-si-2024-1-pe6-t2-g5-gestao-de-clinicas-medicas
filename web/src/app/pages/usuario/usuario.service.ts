import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioVO } from 'src/app/model/vo/UsuarioVO';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly API =
    'http://ec2-18-214-226-89.compute-1.amazonaws.com/usuarios';
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

  cadastrar(usuario: UsuarioVO) {
    return this.http.post(this.API, usuario, this.httpOptions);
  }

  atualizar(id: number, usuario: UsuarioVO) {
    return this.http.put(`${this.API}/${id}`, usuario, this.httpOptions);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`, this.httpOptions);
  }
}
