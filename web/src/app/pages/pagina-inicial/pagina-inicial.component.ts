import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})
export class PaginaInicialComponent implements OnInit {
  public cards!: any[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.criaCards();
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }

  private criaCards() {
    this.cards = [
      {
        icon: 'assets/icon/cards/dashboard.svg',
        title: 'Dashboards',
        url: 'dashboard',
      },
      {
        icon: 'assets/icon/cards/clinica.svg',
        title: 'Clínica',
        url: 'clinica',
      },
      {
        icon: 'assets/icon/cards/consulta.svg',
        title: 'Consultas',
        url: 'consulta',
      },
      {
        icon: 'assets/icon/cards/prontuario.svg',
        title: 'Prontuários',
        url: 'prontuario',
      },
      {
        icon: 'assets/icon/cards/gerenciar-medico.svg',
        title: 'Gerenciar Médicos',
        url: 'medico',
      },
      {
        icon: 'assets/icon/cards/gerenciar-paciente.svg',
        title: 'Gerenciar Pacientes',
        url: 'paciente',
      },
      {
        icon: 'assets/icon/cards/gerenciar-usuario.svg',
        title: 'Gerenciar Usuários',
        url: 'usuario',
      },
      {
        icon: 'assets/icon/cards/relatorio.svg',
        title: 'Relatórios',
        url: 'relatorio',
      },
    ];
  }
}
