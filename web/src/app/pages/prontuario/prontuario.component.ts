import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProntuarioService } from './prontuario.service';
import { MatDialog } from '@angular/material/dialog';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css'],
})
export class ProntuarioComponent implements OnInit {
  displayedColumns: string[] = [
    'paciente',
    'telefone',
    'medico',
    'especialidade',
    'acao',
  ];
  dataSource = new MatTableDataSource<ProntuarioTable>();

  constructor(
    private prontuarioService: ProntuarioService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarProntuarios();
  }

  buscarProntuarios() {
    this.prontuarioService.buscarTodos().subscribe((rs: any) => {
      this.dataSource = new MatTableDataSource<ProntuarioTable>(rs.data);
      console.log('DATA SOURCE', this.dataSource);
    });
  }

  filtrarProntuarios(value: string) {
    // console.log('INPUT PESQUISA', value);
  }

  openModalVisualizacao(idProntuario: number) {
    this.dialog.open(VisualizacaoComponent, {
      width: '90%',
      height: '95%',
      data: {
        idProntuario: idProntuario,
      },
    });
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}

export interface ProntuarioTable {
  paciente: string;
  telefone: string;
  medico: string;
  especialidade: string;
}
