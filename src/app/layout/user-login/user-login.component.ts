import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
	loginForm: FormGroup;
	random_no = '';
	form_error = '';
	pass_error = '';
	c_pass_error = '';
	email_err = '';
	username_err = '';
  constructor(
	private router: Router,
	 private loginService: LoginService
  ) { }

  ngOnInit() {
	  this.loginForm = new FormGroup({
		  'email': new FormControl(null),
		  'password': new FormControl( null)	  
		});
	  
  }
  
  onLoginSubmit(){
		
		console.log(this.loginForm);
		
			if(this.loginForm.value.email == '' || this.loginForm.value.email == null){
				this.email_err = '*Please enter a valid email address';
				return false;
			}else{
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				var email = this.loginForm.value.email;
				if(email.match(mailformat)){
					//nothing to do
				}
				else{
					this.email_err = '*Please enter a valid email address';
					return false;
				}
			}
			if(this.loginForm.value.password == '' || this.loginForm.value.password == null){
				this.pass_error = '*Please enter a password';
				return false;
			}
			this.loginService.postLoginUser(this.loginForm.value).subscribe(
			  res => {
				  
				  if(res['status'] == '422'){
					  this.form_error = 'Wrong password. Try again or click Forgot password to reset it.';
				  }else{
					  console.log(res);
						
						localStorage.setItem('isLoggedin', 'true')
						localStorage.setItem('fbId', res['user'].fbId)
						localStorage.setItem('login_type', res['user'].login_type)
						localStorage.setItem('name', res['user'].name)
						localStorage.setItem('user_email', res['user'].email)
						this.router.navigate(['/home']); 
				  }
					
				/* localStorage.setItem('isLoggedin', 'true')
				localStorage.setItem('fbId', '')
				localStorage.setItem('name', res['name'])
				this.router.navigate(['/home']);  */
			  },
			  error => {
				  console.log(error)
			  }
			)

		
		return false;
		
	}

}
