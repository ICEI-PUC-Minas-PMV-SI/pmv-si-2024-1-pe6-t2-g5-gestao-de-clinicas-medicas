import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClinicaVO } from 'src/app/model/vo/ClinicaVO';

@Injectable({
  providedIn: 'root',
})
export class ClinicaService {
  private readonly API = 'http://localhost:8080/clinica';

  constructor(private http: HttpClient) {}

  buscar() {
    return this.http.get(this.API);
  }

  atualizar(id: number, clinica: ClinicaVO) {
    return this.http.put(`${this.API}/${id}`, clinica);
  }
}
