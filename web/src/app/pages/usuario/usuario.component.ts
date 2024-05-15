import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { UsuarioService } from './usuario.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  displayedColumns: string[] = ['email', 'tipo', 'acao'];
  dataSource = new MatTableDataSource<UsuarioTable>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.buscarTodos().subscribe((rs: any) => {
      this.dataSource = new MatTableDataSource<UsuarioTable>(rs.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  excluirUsuario(id: number) {
    this.usuarioService.excluir(id).subscribe((rs) => {
      location.reload();
    });
  }

  filtrarUsuarios(event: Event) {
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

  openModalEdicao(idUsuario: number) {
    this.dialog.open(EdicaoComponent, {
      width: '50%',
      height: '50%',
      data: {
        idUsuario: idUsuario,
      },
    });
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}

export interface UsuarioTable {
  nome: string;
  tipo: string;
}
