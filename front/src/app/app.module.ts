import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExercisesAllComponent } from './exercises/exercises-all/exercises-all.component';
import { ExercisesListComponent } from './exercises/exercises-list/exercises-list.component';
import { Ex1Component } from './exercises/ex1/ex1.component';
import { SidebarComponent } from './exercises/sidebar/sidebar.component';
import { TaskComponent } from './exercises/ex1/task/task.component';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
