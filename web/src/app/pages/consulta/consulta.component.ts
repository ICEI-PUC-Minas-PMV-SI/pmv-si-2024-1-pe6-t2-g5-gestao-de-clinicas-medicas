import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from './consulta.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  displayedColumns: string[] = [
    'data',
    'horario',
    'medico',
    'especialidade',
    'paciente',
    'status',
  ];
  dataSource = new MatTableDataSource<ConsultaTable>();

  constructor(
    private consultaService: ConsultaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarConsultas();
  }

  buscarConsultas() {
    this.consultaService.buscarTodos().subscribe((rs: any) => {
      this.dataSource = new MatTableDataSource<ConsultaTable>(rs.data);
      console.log('DATA', this.dataSource);
    });
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

export interface ConsultaTable {
  data: string;
  horario: string;
  medico: string;
  especialidade: string;
  paciente: string;
  status: string;
}
