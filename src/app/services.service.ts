import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = "https://localhost:3000/user";

  constructor(private http: HttpClient)
  {}

  
  user(){
    return this.http.get(this.url);
  }

  saveUser(data:any){
    return this.http.post(this.url,data);
  }

}
