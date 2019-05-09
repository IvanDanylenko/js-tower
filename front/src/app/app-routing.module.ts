import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { Ex1Component, ExercisesAllComponent, ExercisesListComponent } from './exercises';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ 
		path: 'exercises',
		component: ExercisesAllComponent,
		children: [
			{ path: '', component: ExercisesListComponent },
			{ path: 'ex1', component: Ex1Component, canActivate: [AuthGuard] }
		]
	},
	{path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
