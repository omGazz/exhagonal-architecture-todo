import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoShellModule } from 'src/domains/todo/presentational/todo-shell/todo-shell.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoShellModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
