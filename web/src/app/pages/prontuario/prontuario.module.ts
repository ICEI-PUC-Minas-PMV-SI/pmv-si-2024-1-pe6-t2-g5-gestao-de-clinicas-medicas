import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProntuarioComponent } from './prontuario.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';

const routes: Routes = [
  {
    path: '',
    component: ProntuarioComponent,
  },
  {
    path: 'visualizacao',
    component: VisualizacaoComponent,
  },
];

@NgModule({
  declarations: [VisualizacaoComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ProntuarioModule {}
