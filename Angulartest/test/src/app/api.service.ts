import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getUsers(): Observable<any> {
    return this
            .http
              .get("http://localhost:4000/")
            .pipe(
              map(res => res)
          );
      }
}