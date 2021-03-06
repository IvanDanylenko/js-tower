import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AceEditorModule } from 'ng2-ace-editor';
import { ToastrModule } from 'ngx-toastr';

import { JwtInterceptor, ErrorInterceptor, BodyTranspilator } from '@/helpers';

import { AppRoutingModule } from '@/app-routing.module';

import { AppComponent } from '@/app.component';
import { HomeComponent } from '@/home';
import { HeaderComponent } from '@/header';
import { FooterComponent } from '@/footer';
import { LoginComponent } from '@/login';
import { RegisterComponent } from '@/register';

import { ExercisesAllComponent, ExercisesListComponent, SidebarComponent } from '@/exercises';
import { Ex1Component, Task1Component, Answer1Component } from '@/exercises/ex1';
import { Ex2Component, Task2Component, Answer2Component } from '@/exercises/ex2';
import { Ex3Component, Task3Component, Answer3Component } from '@/exercises/ex3';

import { AlertComponent } from '@/_shared/alert.component';
import { CabinetComponent } from '@/cabinet';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdditionallyComponent } from './additionally/additionally.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Ex1Component,
    Task1Component,
    Answer1Component,
    ExercisesAllComponent,
    FooterComponent,
    SidebarComponent,
    ExercisesListComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    CabinetComponent,
    Ex2Component,
    Ex3Component,
    Task2Component,
    Answer2Component,
    Answer3Component,
    Task3Component,
    AdditionallyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right'
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AceEditorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    BodyTranspilator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
