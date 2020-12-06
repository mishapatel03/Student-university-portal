import { Router } from '@angular/router';
import { Utils } from './../services/utils.service';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  public userLoggedOut: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
  public httpOptions: any = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor( private _http : HttpClient, private router: Router) {   }

  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8082/login",JSON.stringify(user), this.httpOptions).pipe(map((data: any) => {
      if (!Utils.isNullOrUndefined(data)) {
        data.isLoggedIn = true;
        this.userLoggedOut.next(false);
      }

      localStorage.userInfo = JSON.stringify(data);

      return data;
    }));
  }

  public get isLoggedIn(): boolean {
    const userInfo = Utils.isNullOrUndefined(localStorage.userInfo) ? undefined : JSON.parse(localStorage.userInfo);
    
    return !Utils.isNullOrUndefined(userInfo) ? userInfo.isLoggedIn : false;
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate([ 'login' ]);
    this.userLoggedOut.next(true);
  }
}
