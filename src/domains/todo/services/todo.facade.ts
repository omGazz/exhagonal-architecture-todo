import { Injectable, inject, signal } from '@angular/core';
import { toDo } from '../models/to-do.model';
import { Loading } from '../../../core/utils/loading.decorator';
import { TodoPort } from '../ports/todo.port';

//Facade or service?

//Facade is a design pattern that provides a simplified interface to a larger body of code, such as a class library.
// service is a class with a focused purpose, such as handling the business logic of an application.

//It could be perfectly fine use for example 2 differents services, one to handle details logic and another to handle list logic


/* ************************************************************ 
Switch to the branch "feature/facade-per-page" to see the implementation of a Facade per page
IMPORTANT: We can create a Facade for each pages or for each domain, it depends on the complexity of the application, in this case we are using a Facade for the domain
************************************************************ */

@Injectable({
  providedIn: 'root',
})
export class ToDoFacade {
  public readonly isPending = signal(true);
  public readonly list = signal([] as toDo[]);
  public readonly detail = signal({} as toDo);
  protected readonly port  = inject(TodoPort);

  public hasFetched = false;


  getList(): void {
    this.isPending.set(true);
    this.port.getList().subscribe((list) => {
      this.list.set(list);
      this.isPending.set(false);
      this.hasFetched = true;
    });
  }

  getDetail(id: number): void {
    this.isPending.set(true);
    this.port.getDetail(id).subscribe((item) => {
      this.detail.set(item);
      this.isPending.set(false);
    });
  }

  @Loading('isPending')
  addItem(item: toDo): void {
    this.list.update((list) => [...list, item]);
  }

  @Loading('isPending')
  removeItem(id: number): void {
    this.list.update((list) => list.filter((item) => item.id !== id));
  }
}

