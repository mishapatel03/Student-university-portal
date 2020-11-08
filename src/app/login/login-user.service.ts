import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  

  constructor( private _http : HttpClient) {   }
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8082/login",JSON.stringify(user), this.httpOptions)
  }
}
