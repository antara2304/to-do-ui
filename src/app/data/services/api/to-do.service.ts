import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToDo } from '@app/data/interfaces/todo.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToDoService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  create(data: IToDo): Observable<IToDo> {
    let _url = this.url + '/to-do';
    return this.http.post<IToDo>(_url, data, this.httpOptions);
  }
  update(todoID: string | undefined, data: IToDo): Observable<IToDo> {
    let _url = this.url + '/to-do/update/' + todoID;
    return this.http.put<IToDo>(_url, data, this.httpOptions);
  }
  read(userID: string): Observable<IToDo> {
    let _url = this.url + '/to-do/userID/' + userID;
    return this.http.get<IToDo>(_url, this.httpOptions);
  }
  delete(todoID: string | undefined): Observable<IToDo> {
    let _url = this.url + '/to-do/delete/' + todoID;
    return this.http.delete<IToDo>(_url, this.httpOptions);
  }
}
