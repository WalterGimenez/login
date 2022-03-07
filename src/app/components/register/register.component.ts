import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor() { }

  register() {
    console.log("email", this.email);
    console.log("password", this.password);
  }

}
