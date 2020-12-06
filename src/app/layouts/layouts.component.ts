import { Router } from '@angular/router';
import { Utils } from './../services/utils.service';
import { LoginUserService } from './../login/login-user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit, OnDestroy {

  public isLoggedIn: boolean;

  private loginService: LoginUserService;
  private router: Router;

  constructor(loginService: LoginUserService, router: Router) {
    Object.assign(this, { loginService, router });
  }

  public ngOnInit(): void {
    this.isLoggedIn = Utils.isNullOrUndefined(this.loginService.isLoggedIn) ? false : this.loginService.isLoggedIn;

    if (!this.isLoggedIn) {
      this.router.navigate([ 'login' ]);
    }

    this.loginService.userLoggedOut.subscribe(isLoggedOut => {
      if (!Utils.isNullOrUndefined(isLoggedOut)) {
        this.isLoggedIn = !isLoggedOut;
      }
    });
  }

  public ngOnDestroy(): void {
    
  }
}
