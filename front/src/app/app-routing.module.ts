import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Ex1Component } from './exercises/ex1/ex1.component';
import { ExercisesAllComponent } from './exercises/exercises-all/exercises-all.component';
import { ExercisesListComponent } from './exercises/exercises-list/exercises-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ 
		path: 'exercises',
		component: ExercisesAllComponent,
		children: [
			{ path: '', component: ExercisesListComponent },
			{ path: 'ex1', component: Ex1Component }
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
