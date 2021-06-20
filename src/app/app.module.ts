import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 81cbcc977933b676a3959d0c87514e856496d39f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
