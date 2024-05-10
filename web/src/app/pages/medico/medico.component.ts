import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MedicoService } from './medico.service';
import { EdicaoComponent } from './edicao/edicao.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'especialidade', 'crm', 'acao'];
  dataSource = new MatTableDataSource<MedicoTable>();

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
    });
  }

  excluirMedico(id: number) {
    this.medicoService.excluir(id).subscribe((rs) => {
      location.reload();
    });
  }

  filtrarMedicos(value: string) {
    // console.log('INPUT PESQUISA', value);
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
