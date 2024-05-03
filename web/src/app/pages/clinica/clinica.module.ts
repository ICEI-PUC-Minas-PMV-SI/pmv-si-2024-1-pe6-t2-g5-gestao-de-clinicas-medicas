import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaComponent } from './clinica.component';

const routes: Routes = [
  {
    path: '',
    component: ClinicaComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ClinicaModule {}
