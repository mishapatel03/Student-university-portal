import { Utils } from './../../../services/utils.service';
import { Router } from '@angular/router';
import { LoginUserService } from './../../../login/login-user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavService } from 'src/app/layouts/services/side-nav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SideNavService]
})
export class HeaderComponent implements OnInit {     
  //@ViewChild('sidenav') public sidenav: MatSidenav;

  public isLoggedIn: boolean;

  constructor(
    private SideNavService: SideNavService,
    private loginService: LoginUserService,
    private router: Router) { }

  public ngOnInit(): void {
    this.isLoggedIn = Utils.isNullOrUndefined(this.loginService.isLoggedIn) ? false : this.loginService.isLoggedIn;
  }

  public logout(): void {
    this.loginService.logout();
  }

  public login(): void {
    this.router.navigate([ 'login' ]);
  }

  // clickMenu() { 
  //   this.SideNavService.toggle();
  // }
}
