import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/users/user.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserLogged();//acordarse que acá le digo que llame para verlo (lo primero que hace)
  }

  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }
}
