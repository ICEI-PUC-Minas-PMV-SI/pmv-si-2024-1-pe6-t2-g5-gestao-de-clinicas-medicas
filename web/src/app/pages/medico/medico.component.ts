import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  constructor(private medicoService: MedicoService, private router: Router) {}

  ngOnInit(): void {
    this.buscarMedicos();
  }

  buscarMedicos() {
    this.medicoService
      .buscarTodos()
      .subscribe((rs) => console.log('BUSCA MEDICOS', rs));
  }

  excluirMedico() {
    this.medicoService
      .excluir(17)
      .subscribe((rs) => console.log('EXCLUSAO MEDICO', rs));
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
