import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    // this.medicoService
    //   .buscarTodosMedicos()
    //   .subscribe((dados) => console.log(dados));
  }
}
