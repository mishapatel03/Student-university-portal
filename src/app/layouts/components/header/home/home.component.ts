import { User } from './../../../../typings';
import { Component, OnInit } from '@angular/core';
import { Utils } from './../../../../services/utils.service';
import { LoginUserService } from './../../../../login/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: boolean;
  public user: User;

  private loginService: LoginUserService;
  private router: Router;

  constructor(loginService: LoginUserService, router: Router) {
    Object.assign(this, { loginService, router });

    this.isLoggedIn = Utils.isNullOrUndefined(this.loginService.isLoggedIn) ? false : this.loginService.isLoggedIn;

    if (!this.isLoggedIn) {
      this.router.navigate([ 'login' ]);
    }
  }

  public ngOnInit(): void {
    this.user = this.loginService.userDetails;
    console.log(this.user);
  }
}
