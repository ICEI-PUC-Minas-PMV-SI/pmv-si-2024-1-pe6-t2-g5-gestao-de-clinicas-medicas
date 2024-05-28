import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API =
    'http://ec2-18-214-226-89.compute-1.amazonaws.com/login';

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post(this.API, user);
  }
}
