import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ex1Component } from './exercises/ex1/ex1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ex1', component: Ex1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
