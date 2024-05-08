import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MedicoComponent } from './medico.component';
import { EdicaoComponent } from './edicao/edicao.component';

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
  declarations: [CadastroComponent, EdicaoComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
})
export class MedicoModule {}
