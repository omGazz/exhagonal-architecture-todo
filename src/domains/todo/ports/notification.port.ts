import { Observable } from 'rxjs';
import { todoDTO } from '../models/types/to-do.model';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class NotificationPort {
  public abstract sendNotification(message: string): Observable<void>;
}
