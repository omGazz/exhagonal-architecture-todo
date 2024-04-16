import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { toDo } from '../models/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {

  getToDoListObservable(): Observable<toDo[]> {
    return of<toDo[]>([
      {
        id: 1,
        title: 'Buy Milk',
        description: 'Need to buy milk from the store',
        status: 'pending',
        tags: ['shopping', 'personal'],
      },
      {
        id: 2,
        title: 'Meeting with Boss',
        description: 'Need to meet with boss to discuss project',
        status: 'pending',
        tags: ['work', 'meeting'],
      },
      {
        id: 3,
        title: 'Dentist Appointment',
        description: 'Need to visit dentist for regular checkup',
        status: 'pending',
        tags: ['personal', 'health'],
      },
      {
        id: 4,
        title: 'Submit Assignment',
        description: 'Need to submit assignment before deadline',
        status: 'pending',
        tags: ['work', 'assignment'],
      },
      {
        id: 5,
        title: 'Call Mom',
        description: 'Need to call mom to check on her',
        status: 'pending',
        tags: ['personal', 'family'],
      },
    ]).pipe(delay(1500));
  }
}
