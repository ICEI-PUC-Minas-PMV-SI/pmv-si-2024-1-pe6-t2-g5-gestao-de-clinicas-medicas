import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PacienteService } from './paciente.service';
import { EdicaoComponent } from './edicao/edicao.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})

export class PacienteComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'telefone'];
  dataSource = new MatTableDataSource<PacienteTable>();

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.buscarPacientes();
  }

  buscarPacientes() {
    this.pacienteService.buscarTodos().subscribe((rs: any) => {
      this.dataSource = new MatTableDataSource<PacienteTable>(rs.data);
    });
  }

  excluirPaciente(id: number) {
    this.pacienteService
      .excluir(id)
      .subscribe((rs) => {
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

  openModalEdicao(idPaciente: number) {
    this.dialog.open(EdicaoComponent, {
      width: '50%',
      height: '50%',
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


