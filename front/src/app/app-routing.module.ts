import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { ExercisesAllComponent, ExercisesListComponent } from './exercises';
import { Ex1Component } from './exercises/ex1';
import { Ex2Component } from './exercises/ex2';
import { Ex3Component } from './exercises/ex3';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { CabinetComponent } from './cabinet';
import { AdditionallyComponent } from './additionally';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'cabinet', component: CabinetComponent, canActivate: [AuthGuard] },
	{ path: 'additionally', component: AdditionallyComponent },
	{ 
		path: 'exercises',
		component: ExercisesAllComponent,
		children: [
			{ path: '', component: ExercisesListComponent },
			{ path: 'ex1', component: Ex1Component, canActivate: [AuthGuard] },
			{ path: 'ex2', component: Ex2Component, canActivate: [AuthGuard] },
			{ path: 'ex3', component: Ex3Component, canActivate: [AuthGuard] }
		]
	},
	{path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
