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
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    //para averiguar si hay errores en la llamada a la API
      error => {
        console.log("error =>", error);
      });
  }

}
