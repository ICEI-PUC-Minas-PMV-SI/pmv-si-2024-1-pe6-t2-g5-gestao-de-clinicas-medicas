import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
