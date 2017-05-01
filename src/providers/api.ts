import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Task } from './../models/Task';

@Injectable()
export class Api {
  private API_PATH = 'http://howaboutyoursales.dev';

  constructor(private http: Http) {}

  getSections(): Observable<any[]> {
    return this.http.get(`${this.API_PATH}/sections`)
      .map(res => res.json() || []);
  }

  completeTask(task: Task): Observable<Task> {
    return this.http.patch(`${this.API_PATH}/tasks/${task.id}`, '')
      .map(res => res.json());
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete(`${this.API_PATH}/tasks/${task.id}`, '')
      .map(res => res.json());
  }

  createTask(task: Task): Observable<Task> {
    return this.http.delete(`${this.API_PATH}/tasks/${task.id}`, '')
      .map(res => res.json());
  }

}
