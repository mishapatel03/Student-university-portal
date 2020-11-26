import { Utils } from './../services/utils.service';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor( private _http : HttpClient) {   }
  
  public httpOptions: any = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8082/login",JSON.stringify(user), this.httpOptions).pipe(map((data: any) => {
      if (!Utils.isNullOrUndefined(data)) {
        data.isLoggedIn = true;
      }

      localStorage.userInfo = JSON.stringify(data);

      return data;
    }));
  }

  public isLoggedIn(): boolean {
    return JSON.parse(localStorage.userInfo).isLoggedIn;
  }
}
