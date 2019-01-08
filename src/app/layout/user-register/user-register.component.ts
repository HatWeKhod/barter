import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
	pass_error = '';
	c_pass_error = '';
	form_error = '';
	email_err = '';
	username_err = '';
	sigupForm: FormGroup;
  constructor(
	private router: Router,
	  private loginService: LoginService
  ) { }

  ngOnInit() {
	  this.sigupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl( null),
      'c_password': new FormControl(null)

    });
	  
  }
  
    onSubmit() {

		if(this.sigupForm.value.username == '' || this.sigupForm.value.username == null){
			this.username_err = '*Please enter your username';
			return false;
		}	
		
		if(this.sigupForm.value.email == '' || this.sigupForm.value.email == null){
			this.email_err = '*Please enter a valid email address';
			return false;
		}else{
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var email = this.sigupForm.value.email;
			if(email.match(mailformat)){
				//nothing to do
			}
			else{
				this.email_err = '*Please enter a valid email address';
				return false;
			}
		}
		
		if(this.sigupForm.value.password == '' || this.sigupForm.value.password == null){
			this.pass_error = '*Please enter a password';
			return false;
		}
		if(this.sigupForm.value.c_password == '' || this.sigupForm.value.c_password == null){
			this.c_pass_error = '*Confirm your password';
			return false;
		}
		if(this.sigupForm.value.password != this.sigupForm.value.c_password){
			this.c_pass_error = '*Those passwords did not match. Try again.';
			return false;
		}
		
		this.loginService.postRegister(this.sigupForm.value).subscribe(
		  res => {
			  console.log(res);
			localStorage.setItem('isLoggedin', 'true')
            localStorage.setItem('fbId', res['user'].fbId)
            localStorage.setItem('name', res['user'].name)
			localStorage.setItem('user_email', res['user'].email)
            this.router.navigate(['/home']);  
		  },
		  error => {
			  console.log(error)
		  }
		)

	
  }
  

}
