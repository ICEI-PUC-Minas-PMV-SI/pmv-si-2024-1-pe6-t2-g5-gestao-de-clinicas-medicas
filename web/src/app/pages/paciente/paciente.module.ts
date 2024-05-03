import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PacienteComponent } from './paciente.component';

const routes: Routes = [
  {
    path: '',
    component: PacienteComponent,
  },
];

@NgModule({
  declarations: [CadastroComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class PacienteModule {}
