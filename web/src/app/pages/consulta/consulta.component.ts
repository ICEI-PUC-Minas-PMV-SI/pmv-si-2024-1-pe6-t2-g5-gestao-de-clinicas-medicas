import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  constructor(
    private consultaService: ConsultaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarConsultas();
  }

  buscarConsultas() {
    this.consultaService
      .buscarTodos()
      .subscribe((rs) => console.log('BUSCA CONSULTA', rs));
  }

  excluirConsulta() {
    this.consultaService
      .excluir(10)
      .subscribe((rs) => console.log('EXCLUSAO CONSULTA', rs));
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
