import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public tokenInfo: any;
  constructor() {}
  decodeToken() {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        this.tokenInfo = jwtDecode(token);
        console.log(this.tokenInfo);
      }
      return this.tokenInfo['id'];
    } catch (error) {
      return null;
    }
  }
}
