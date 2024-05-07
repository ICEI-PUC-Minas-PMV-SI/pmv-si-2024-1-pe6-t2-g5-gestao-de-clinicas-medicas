import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta.component';

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
  declarations: [CadastroComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ConsultaModule {}
