import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {

  private _baseUrl = "http://localhost:3000/users/";
  public loggedInUser: any;

  constructor(private _http: HttpClient) { }

  login(loginData): Observable<any> {
    return this._http.post(`${this._baseUrl}login`, loginData);
    // return of({name:'madhav'});

  }

}
