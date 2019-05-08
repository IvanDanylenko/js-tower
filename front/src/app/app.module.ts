import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interseptor';
import { ErrorInterceptor } from './helpers/error.interseptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Ex1Component } from './exercises/ex1/ex1.component';
import { ExercisesAllComponent } from './exercises/exercises-all/exercises-all.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './exercises/sidebar/sidebar.component';
import { TaskComponent } from './exercises/ex1/task/task.component';
import { ExercisesListComponent } from './exercises/exercises-list/exercises-list.component';

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
    ExercisesListComponent
  ],
  imports: [
    BrowserModule,
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
