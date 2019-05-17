import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*fake-backend*/
// import { fakeBackendProvider } from '@/helpers';

import { JwtInterceptor, ErrorInterceptor, BodyTranspilator } from '@/helpers';

import { AppRoutingModule } from '@/app-routing.module';

import { AppComponent } from '@/app.component';
import { HomeComponent } from '@/home';
import { HeaderComponent } from '@/header';
import { FooterComponent } from '@/footer';
import { LoginComponent } from '@/login';
import { RegisterComponent } from '@/register';

import { ExercisesAllComponent, ExercisesListComponent, SidebarComponent } from '@/exercises';
import { Ex1Component, Task1Component, EditorComponent } from '@/exercises/ex1';
import { Ex2Component, Task2Component, Answer2Component } from '@/exercises/ex2';
import { Ex3Component, Task3Component, Answer3Component } from '@/exercises/ex3';

import { AlertComponent } from '@/_shared/alert.component';
import { CabinetComponent } from '@/cabinet';
import { AceDirective } from '@/helpers/ace.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Ex1Component,
		Task1Component,
		EditorComponent,
    ExercisesAllComponent,
    FooterComponent,
    SidebarComponent,
    ExercisesListComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
		AceDirective,
    CabinetComponent,
    Ex2Component,
    Ex3Component,
    Task2Component,
    Answer2Component,
    Answer3Component,
    Task3Component
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
		// fakeBackendProvider,
		BodyTranspilator
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
