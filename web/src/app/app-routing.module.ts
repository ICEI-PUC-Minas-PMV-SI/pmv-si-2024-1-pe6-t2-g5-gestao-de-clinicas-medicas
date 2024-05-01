import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'medico',
    loadChildren: () =>
      import('./pages/medico/medico.module').then((m) => m.MedicoModule),
  },
  {
    path: 'paciente',
    loadChildren: () =>
      import('./pages/paciente/paciente.module').then((m) => m.PacienteModule),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./pages/usuario/usuario.module').then((m) => m.UsuarioModule),
  },
  {
    path: 'consulta',
    loadChildren: () =>
      import('./pages/consulta/consulta.module').then((m) => m.ConsultaModule),
  },
  {
    path: 'agenda',
    loadChildren: () =>
      import('./pages/agenda/agenda.module').then((m) => m.AgendaModule),
  },
  {
    path: 'prontuario',
    loadChildren: () =>
      import('./pages/prontuario/prontuario.module').then(
        (m) => m.ProntuarioModule
      ),
  },
  {
    path: 'relatorio',
    loadChildren: () =>
      import('./pages/relatorio/relatorio.module').then(
        (m) => m.RelatorioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
