import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MedicoComponent } from './medico.component';

const routes: Routes = [
  {
    path: '',
    component: MedicoComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
];

@NgModule({
  declarations: [CadastroComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class MedicoModule {}
