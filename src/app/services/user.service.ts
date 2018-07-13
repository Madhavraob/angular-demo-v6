import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable()
export class UserService {

  private _baseUrl = "http://localhost:3000/users/";

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get(`${this._baseUrl}/users`);
    // .pipe(map((res: Response) => { return res }));
  }

  getUserById(id: any): Observable<any> {
    return this._http.get(`${this._baseUrl}/users`);
    // .pipe(map((res: Response) => { return res }));
  }

}
