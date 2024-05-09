import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  constructor(
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarPacientes();
  }

  buscarPacientes() {
    this.pacienteService
      .buscarTodos()
      .subscribe((rs) => console.log('BUSCA PACIENTE', rs));
  }

  excluirPaciente() {
    this.pacienteService
      .excluir(17)
      .subscribe((rs) => console.log('EXCLUSAO PACIENTE', rs));
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
