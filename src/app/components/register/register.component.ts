import { Component } from '@angular/core';
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

  constructor(public userService: UserServiceService) { }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      console.log(data);
    });
  }

}
