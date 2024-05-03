import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
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
        icon: 'assets/icon/consulta.svg',
        title: 'Agenda',
        url: '',
      },
      {
        icon: 'assets/icon/consulta.svg',
        title: 'Consultas',
        url: '',
      },
      {
        icon: 'assets/icon/paciente.svg',
        title: 'Prontuários',
        url: '',
      },
      {
        icon: 'assets/icon/paciente.svg',
        title: 'Relatórios',
        url: '',
      },
      {
        icon: 'assets/icon/medico.svg',
        title: 'Gerenciar Médicos',
        url: 'medico/cadastro',
      },
      {
        icon: 'assets/icon/paciente.svg',
        title: 'Gerenciar Pacientes',
        url: '',
      },
      {
        icon: 'assets/icon/paciente.svg',
        title: 'Gerenciar Usuários',
        url: '',
      },
    ];
  }
}
