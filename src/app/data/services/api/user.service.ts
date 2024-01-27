import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@app/data/interfaces/user.interface';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}

  create(_data: IUser): Observable<IUser> {
    let _url = this.url + '/user/create';
    return this.http.post<IUser>(_url, _data, this.httpOptions);
  }
  login(_data: IUser): Observable<IUser> {
    let _url = this.url + '/auth/login';
    return this.http.post<IUser>(_url, _data, this.httpOptions);
  }
}
