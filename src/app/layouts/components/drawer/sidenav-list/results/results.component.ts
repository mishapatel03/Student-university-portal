import { LoginUserService } from './../../../../../login/login-user.service';
import { User, ResultSubject } from 'src/app/typings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public user: User;
  public results: {
    sem: string;
    subjectResult: ResultSubject[];
  }[] = [];

  private loginService: LoginUserService;

  constructor(loginService: LoginUserService) {
    Object.assign(this, { loginService });
  }

  public ngOnInit(): void {
    this.user = this.loginService.userDetails;

    for (let [key, value] of Object.entries(this.user.result[0])) {
      const result = {
        sem: key,
        subjectResult: value
      };

      this.results.push(result);
    }
  }
}
