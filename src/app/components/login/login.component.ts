import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from "../../users/user.service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(public userService: UserServiceService, public router:Router) { }

  login(){
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);//las cookies se ven en Aplication
      this.router.navigateByUrl('/');//si da ok que vaya al 
    },
    //para averiguar si hay errores en la llamada a la API
      error => {
        console.log("error =>", error);
      });
  }

}
