import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ex1Component } from './exercises/ex1/ex1.component';
import { ExercisesAllComponent } from './exercises/exercises-all/exercises-all.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'exercises', component: ExercisesAllComponent },
	{ path: 'exercises/ex1', component: Ex1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
