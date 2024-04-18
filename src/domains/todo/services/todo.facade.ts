import { Injectable, computed, inject, signal } from '@angular/core';
import { toDo } from '../models/to-do.model';
import { Loading } from '../../../core/utils/loading.decorator';
import { TodoPort } from '../ports/todo.port';
import { ListService } from './list.service';
import { DetailService } from './detail.service';

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
  listService = inject(ListService);
  detailService = inject(DetailService);

  public readonly isPendingList = computed(() => this.listService.isPending());
  public readonly isPendingDetail = computed(() =>
    this.detailService.isPending()
  );
  //public readonly list = signal([] as toDo[]);
  //public readonly detail = signal({} as toDo);
  //protected readonly port  = inject(TodoPort);

  //public hasFetched = false;

  public readonly list = computed(() => this.listService.list());
  public readonly detail = computed(() => this.detailService.detail());

  getList(): void {
    //this.isPending.set(true);
    this.listService.getList();
  }

  getDetail(id: number): void {
    this.detailService.getById(id);
  }

  //@Loading('isPending')
  addItem(item: toDo): void {
    this.listService.addItem(item);
  }

  //@Loading('isPending')
  removeItem(id: number): void {
    this.listService.removeItem(id);
  }
}
