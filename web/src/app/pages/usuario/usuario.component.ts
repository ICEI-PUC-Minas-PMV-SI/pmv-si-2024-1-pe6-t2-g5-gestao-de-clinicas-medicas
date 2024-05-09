import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente/paciente.service';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService
      .buscarTodos()
      .subscribe((rs) => console.log('BUSCA USUARIO', rs));
  }

  excluirUsuario() {
    this.usuarioService
      .excluir(25)
      .subscribe((rs) => console.log('EXCLUSAO USUARIO', rs));
  }

  linkTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
