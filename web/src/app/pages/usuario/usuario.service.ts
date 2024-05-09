import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioVO } from 'src/app/model/vo/UsuarioVO';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly API = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get(this.API);
  }

  buscarPorId(id: number) {
    return this.http.get(`${this.API}/${id}`);
  }

  cadastrar(usuario: UsuarioVO) {
    return this.http.post(this.API, usuario);
  }

  atualizar(id: number, usuario: UsuarioVO) {
    return this.http.put(`${this.API}/${id}`, usuario);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
