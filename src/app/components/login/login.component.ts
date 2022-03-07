import { Component } from '@angular/core';
import { UserServiceService } from "../../users/user.service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(public userService: UserServiceService) { }

  login(){
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
    });
  }

}
