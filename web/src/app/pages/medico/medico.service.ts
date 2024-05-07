import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  private readonly API = 'http://localhost:8080/medicos';
  public tokenAPI: any;

  constructor(private http: HttpClient) {}

  buscarTodosMedicos() {
    // localStorage.setItem('token', '704fe323637760855e7015b0c2eafed281c6899c');
    // const token = localStorage.getItem('token');
    // this.tokenAPI = 'Bearer ' + token;
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: this.tokenAPI,
    //   }),
    // };
    // return this.http.get(this.API, httpOptions);
  }
}
