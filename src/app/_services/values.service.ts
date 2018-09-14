import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ValuesService {

    constructor(private http: HttpClient) { }

    getValues() : Observable<any> {
        return this.http.get<any>("http://localhost:53217/api/Values")
        .pipe(
            map(result => { return result }));
    }
}