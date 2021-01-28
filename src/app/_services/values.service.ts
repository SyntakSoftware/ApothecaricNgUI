import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class ValuesService {

    constructor(private http: HttpClient) { }

    getValues() : Promise<any> {
        return this.http.get<any>("https://localhost:54172/api/Values").toPromise();
    }
}