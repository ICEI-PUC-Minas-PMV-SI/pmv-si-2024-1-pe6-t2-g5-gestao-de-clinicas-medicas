import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MedicoService } from './medico.service';
import { EdicaoComponent } from './edicao/edicao.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'especialidade', 'crm', 'acao'];
  dataSource = new MatTableDataSource<MedicoTable>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarMedicos();
  }

  buscarMedicos() {
    this.medicoService.buscarTodos().subscribe((rs: any) => {
      this.dataSource = new MatTableDataSource<MedicoTable>(rs.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  excluirMedico(id: number) {
    this.medicoService.excluir(id).subscribe((rs) => {
      location.reload();
    });
  }

  filtrarMedicos(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModalCadastro() {
    this.dialog.open(CadastroComponent, {
      width: '50%',
      height: '50%',
    });
  }

  openModalEdicao(idMedico: number) {
    this.dialog.open(EdicaoComponent, {
      width: '50%',
      height: '50%',
      data: {
        idMedico: idMedico,
      },
    });
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}

export interface MedicoTable {
  nome: string;
  especialidade: string;
  crm: string;
}
