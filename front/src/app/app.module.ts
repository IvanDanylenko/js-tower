import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*fake-backend*/
import { fakeBackendProvider } from './helpers';

import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { ExercisesAllComponent, ExercisesListComponent, Ex1Component } from './exercises';

import { SidebarComponent } from './exercises/sidebar';
import { TaskComponent } from './exercises/ex1/task';
import { AlertComponent } from './_shared/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Ex1Component,
    ExercisesAllComponent,
    FooterComponent,
    SidebarComponent,
    TaskComponent,
    ExercisesListComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
    AppRoutingModule,
		HttpClientModule
  ],
  providers: [
  	{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

		// provider used to create fake backend
		fakeBackendProvider
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
