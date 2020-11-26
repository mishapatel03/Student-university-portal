import { Router } from '@angular/router';
import { LoginUserService } from './login/login-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';

  constructor(private loginService: LoginUserService, private router: Router) {}

  public ngOnInit(): void {
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['login']);
    }
  }
}
