import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUserService } from './login-user.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(private _service : LoginUserService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception occured")
    );
  }

}
