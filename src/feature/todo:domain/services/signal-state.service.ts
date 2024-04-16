import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RestApiService } from './rest-api.service';
import { toDo, toDoList } from '../models/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class SignalStateService {
  list = signal([] as toDoList);
  api = inject(RestApiService);

  constructor() {
    console.log('SignalStateService created');
  }

  getList(): void {
    console.log('Getting List');
    this.api.getToDoListObservable().subscribe((list) => {
      console.log('Data Received', list);
      this.list.set(list);
    });
  }
}
