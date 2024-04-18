import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeTodoAdapter } from 'src/domains/todo/adapters/fake-todo.adapter';
import { TodoPort } from 'src/domains/todo/ports/todo.port';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: TodoPort, useClass: FakeTodoAdapter }],

  bootstrap: [AppComponent]
})
export class AppModule { }
