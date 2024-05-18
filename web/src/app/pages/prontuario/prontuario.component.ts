import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProntuarioService } from './prontuario.service';
import { MatDialog } from '@angular/material/dialog';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
      console.log('RS', rs);
      this.dataSource = new MatTableDataSource<ProntuarioTable>(rs.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filtrarProntuarios(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
