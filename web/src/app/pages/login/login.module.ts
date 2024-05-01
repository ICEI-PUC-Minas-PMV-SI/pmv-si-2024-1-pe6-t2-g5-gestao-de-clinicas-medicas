import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RedefinicaoSenhaComponent } from './redefinicao-senha/redefinicao-senha.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RedefinicaoSenhaComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class LoginModule {}
