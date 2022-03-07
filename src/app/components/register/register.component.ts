import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/users/user.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  email!: string;
  password!: string;
  confirmPassword!: string;
  passErrorBolean!: boolean;

  constructor(public userService: UserServiceService, public router:Router) { }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
    });
  }

}
