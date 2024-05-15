import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PacienteService } from './paciente.service';
import { EdicaoComponent } from './edicao/edicao.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'acao'];
  dataSource = new MatTableDataSource<PacienteTable>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarPacientes();
  }

  buscarPacientes() {
    this.pacienteService.buscarTodos().subscribe((rs: any) => {
      this.dataSource = new MatTableDataSource<PacienteTable>(rs.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  excluirPaciente(id: number) {
    this.pacienteService.excluir(id).subscribe((rs) => {
      location.reload();
    });
  }

  filtrarPacientes(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModalCadastro() {
    this.dialog.open(CadastroComponent, {
      width: '60%',
      height: '70%',
    });
  }

  openModalEdicao(idPaciente: number) {
    this.dialog.open(EdicaoComponent, {
      width: '50%',
      height: '70%',
      data: {
        idPaciente: idPaciente,
      },
    });
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}

export interface PacienteTable {
  nome: string;
  cpf: string;
  telefone: string;
}
