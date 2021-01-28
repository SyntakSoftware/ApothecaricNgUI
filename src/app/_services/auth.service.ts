import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICurrentUser } from "../_models/currentUser.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string) : Promise<ICurrentUser> {
        return this.http.post<ICurrentUser>("https://localhost:54172/api/Account/Token", { 'email': email, 'password': password })
        .pipe(
            map(user => {
                
                if (user && user.accessToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return <ICurrentUser>user;
            })).toPromise();
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    refreshToken() : Observable<ICurrentUser> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let token = currentUser.refreshToken;

        return this.http.post<ICurrentUser>("https://localhost:54172/api/Account/Token/Refresh", { 'token': token })
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