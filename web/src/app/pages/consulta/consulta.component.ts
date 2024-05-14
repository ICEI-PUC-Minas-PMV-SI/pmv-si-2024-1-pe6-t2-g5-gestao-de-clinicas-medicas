import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaService } from './consulta.service';
import { EdicaoComponent } from './edicao/edicao.component';

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
    'acao',
  ];
  dataSource = new MatTableDataSource<ConsultaTable>();

  constructor(
    private consultaService: ConsultaService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarConsultas();
  }

  buscarConsultas() {
    this.consultaService.buscarTodos().subscribe((rs: any) => {
      this.dataSource = new MatTableDataSource<ConsultaTable>(rs.data);
    });
  }

  excluirConsulta(id: number) {
    this.consultaService.excluir(id).subscribe((rs) => {
      location.reload();
    });
  }

  openModalCadastro() {
    this.dialog.open(CadastroComponent, {
      width: '60%',
      height: '70%',
    });
  }

  openModalEdicao(idConsulta: number) {
    this.dialog.open(EdicaoComponent, {
      width: '50%',
      height: '70%',
      data: {
        idConsulta: idConsulta,
      },
    });
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
