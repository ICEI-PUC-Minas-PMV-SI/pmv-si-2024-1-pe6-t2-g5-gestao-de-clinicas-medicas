import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  constructor(private medicoService: MedicoService, private router: Router) {}

  ngOnInit(): void {
    // this.medicoService
    //   .buscarTodosMedicos()
    //   .subscribe((dados) => console.log(dados));
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
