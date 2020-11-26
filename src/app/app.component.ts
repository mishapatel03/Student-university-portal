import { Router } from '@angular/router';
import { LoginUserService } from './login/login-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(private loginService: LoginUserService) {}

  public ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn;
  }
}
