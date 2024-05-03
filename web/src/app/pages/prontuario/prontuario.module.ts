import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProntuarioComponent } from './prontuario.component';

const routes: Routes = [
  {
    path: '',
    component: ProntuarioComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ProntuarioModule {}
