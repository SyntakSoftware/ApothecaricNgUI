import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentUser } from '../_models/currentUser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) : Observable<ICurrentUser> {
        return this.http.post<ICurrentUser>("http://localhost:53217/api/Account/Token", { 'email': email, 'password': password })
        .pipe(
            map(user => {
                
                if (user && user.accessToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return <ICurrentUser>user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    refreshToken() : Observable<ICurrentUser> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let token = currentUser.refreshToken;

        return this.http.post<ICurrentUser>("http://localhost:53217/api/Account/Token/Refresh", { 'token': token })
        .pipe(
            map(user => {
                
                if (user && user.accessToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return <ICurrentUser>user;
            }));
    }

    getAuthToken() : string {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(currentUser != null) {
            return currentUser.accessToken;
        }

        return '';
    }
}