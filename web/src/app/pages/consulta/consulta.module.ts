import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
];

@NgModule({
  declarations: [ConsultaComponent, CadastroComponent, EdicaoComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class ConsultaModule {}
