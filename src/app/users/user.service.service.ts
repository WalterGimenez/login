import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post("https://crudcrud.com/api/0b4d59aef13748c9bcb763213b6dc493/login", user)
  }

  register(user: any): Observable<any> {
    return this.http.post("https://crudcrud.com/api/0b4d59aef13748c9bcb763213b6dc493/login", user);
  }
}
