import { Utils } from './../../../../services/utils.service';
import { LoginUserService } from './../../../../login/login-user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: boolean;

  private loginService: LoginUserService;
  private router: Router;

  constructor(loginService: LoginUserService, router: Router) {
    Object.assign(this, { loginService, router });

    this.isLoggedIn = Utils.isNullOrUndefined(this.loginService.isLoggedIn) ? false : this.loginService.isLoggedIn;

    if (!this.isLoggedIn) {
      this.router.navigate([ 'login' ]);
    }
  }

  ngOnInit(): void {
  
  }
}
