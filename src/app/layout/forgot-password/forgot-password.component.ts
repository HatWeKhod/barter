import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
	forgotForm: FormGroup;
	form_error = '';
	email_err = '';
  constructor(
	private router: Router,
	 private loginService: LoginService
  ) { }

  ngOnInit() {
	  this.forgotForm = new FormGroup({
		  'email': new FormControl(null)
		});
  }
  
  forgotPass(){
		console.log(this.forgotForm);
		
				if(this.forgotForm.value.email == '' || this.forgotForm.value.email == null){
					this.email_err = '*Please enter a valid email address';
					return false;
				}else{
					var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					var email = this.forgotForm.value.email;
					if(email.match(mailformat)){
						//nothing to do
					}
					else{
						this.email_err = '*Please enter a valid email address';
						return false;
					}
				}
			
			this.loginService.postForgotPass(this.forgotForm.value).subscribe(
			  res => {
					if(res['status'] == '422'){
					  this.form_error = res['message'];
					  return false;
				  }else{
					  console.log(res);
						this.form_error = 'We have sent an email with password!';
						return false;
				  }
			  },
			  error => {
				  console.log(error)
			  }
			)
		
	}

}
