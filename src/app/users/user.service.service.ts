import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any>{
    return this.http.post("https://crudcrud.com/api/0b4d59aef13748c9bcb763213b6dc493/login", user)
  }

  register(user: any): Observable<any> {
    return this.http.post("https://crudcrud.com/api/0b4d59aef13748c9bcb763213b6dc493/register", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("https://crudcrud.com/api/0b4d59aef13748c9bcb763213b6dc493/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
