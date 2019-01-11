import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  loginWithFb(): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'auth/facebook')
  }

  postRegister(data) {
	return this.http.post(environment.apiEndpoint + 'register', data)
  }
  postLoginUser(data) {
	return this.http.post(environment.apiEndpoint + 'login_user', data)
  }
  postForgotPass(data) {
	return this.http.post(environment.apiEndpoint + 'forgot_pass', data)
  } 
  postLogin(data) {
    return this.http.post(environment.apiEndpoint + 'login', data)
  }
  postUserData(data) {
	  console.log('userdata coming here');
	  console.log(data);
    return this.http.post(environment.apiEndpoint + 'userdata', data)
  }
  postResetPass(data) {
    return this.http.post(environment.apiEndpoint + 'resetPass', data)
  }
  

  getLoginData() {
    return this.http.get(environment.apiEndpoint + 'loggedIn')
  }


  logout() {
    return this.http.get(environment.apiEndpoint + 'logout')
  }

}
