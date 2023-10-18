import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { LoginDataInter } from '../ProductInter/login-data-inter';
@Injectable({
  providedIn: 'root',
})
export class authservice {

  login: string = 'http://localhost:3000/userCredential'; 
  signUp:string = 'http://localhost:3000/userCredential' //For Login
  constructor(private http: HttpClient) {}

  loginUser(): Observable<any> {
    return this.http.get<any>(this.login);
  }

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(this.signUp, data);
  }
}