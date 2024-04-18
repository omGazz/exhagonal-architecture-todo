import { Observable } from "rxjs";
import { toDo } from "../models/to-do.model";
import { Injectable } from '@angular/core';


@Injectable()
export abstract class TodoPort {
    public abstract getList(): Observable<toDo[]>;
    public abstract getDetail(id: number): Observable<toDo>;
  }