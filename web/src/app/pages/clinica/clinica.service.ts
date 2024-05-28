import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClinicaVO } from 'src/app/model/vo/ClinicaVO';

@Injectable({
  providedIn: 'root',
})
export class ClinicaService {
  private readonly API =
    'http://ec2-18-214-226-89.compute-1.amazonaws.com/clinica';
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

  buscar() {
    return this.http.get(this.API, this.httpOptions);
  }

  atualizar(id: number, clinica: ClinicaVO) {
    return this.http.put(`${this.API}/${id}`, clinica, this.httpOptions);
  }
}
