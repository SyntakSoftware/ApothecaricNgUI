import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrentUser } from '../_models/currentUser';
import { Response } from '@angular/http';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string) : Observable<ICurrentUser> {
        //return this.http.post<ICurrentUser>('http://localhost:53217/api/Account/Token', { email: email, password: password })
        //    .pipe(
        //        map(this.extractData)
          //  )
          //  .pipe(map(user => {
          //      if (user && user.accessToken) {
          //          localStorage.setItem('currentUser', JSON.stringify(user));
          //      }

          //      return <any>user || {};
          //  }));

          return;
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
}