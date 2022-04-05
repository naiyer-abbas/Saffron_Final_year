import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWithoutLoginComponent } from './home-without-login/home-without-login.component';

const routes: Routes = [
  {path: '', component: HomeWithoutLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
