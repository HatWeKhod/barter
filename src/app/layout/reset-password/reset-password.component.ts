import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
	resetForm: FormGroup;
	random_no = '';
	form_error = '';
	new_pass_error = '';
	c_new_pass_error = '';
	confirm_pass = '';
	user_email = '';
	username_err = '';
	form_show ;
	expire_err = '';
	bad_req_err = '';
	success_form_msg = '';
	
  constructor(
		private router: Router,
		private loginService: LoginService,
		private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
	  this.resetForm = new FormGroup({
		  'New_password': new FormControl( null),
			'c_New_password' : new FormControl( null),
			'user_email': new FormControl()
		});
		
	   this.activatedRoute.queryParams.subscribe(params => {
        const token = params['token'];
        console.log(token);
		if(token != 'undefined' || token != ''){
			
		
		var reset_token = {token:token};
		this.loginService.postUserData(reset_token).subscribe(
			  res => {
				  
					var token_date = res['user'].created_at;
					var u_email = res['user'].email;
					var today = new Date();
					var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
					var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
					var current_date = date+' '+time;
					
					var current_date_time = new Date(current_date);
					var timestamp1 = today.getTime();
					console.log(timestamp1);
					
					var token_date_time = new Date(token_date);
					var timestamp2 = token_date_time.getTime() + 600000;
					console.log(timestamp2);
					
					if(timestamp2>timestamp1){
						this.form_show = true;
						this.user_email = u_email;
					}else{
						this.form_show = false;
						this.expire_err = 'Sorry, your password reset link expired!';
					}

					//var	token_time = 	
				//this.router.navigate(['/home']);
			  },
			  error => {
				  console.log(error)
			  }
			)
		}else{
			this.bad_req_err = 'Bad request';
		}
      });
	  
	  
	  
	  
  }
  
  
  onPasswordUpdate(){
		console.log(this.resetForm);
				if(this.resetForm.value.New_password == '' || this.resetForm.value.New_password  == null){
					this.new_pass_error = '*Please enter a password';
					return false;
				}
				if(this.resetForm.value.c_New_password == '' || this.resetForm.value.c_New_password  == null){
					this.c_new_pass_error = '*Please enter confirm password';
					return false;
				}
				if(this.resetForm.value.New_password != this.resetForm.value.c_New_password){
					this.c_new_pass_error = '*Password does not match';
					return false;
				}
				
				this.loginService.postResetPass(this.resetForm.value).subscribe(
				  res => {
						if(res['status'] == '422'){
						  this.form_error = res['message'];
						  return false;
					  }else{
						  console.log(res);
							this.success_form_msg = 'Your password updated successfully, please sign in into you account!';
							return false;
					  }
				  },
				  error => {
					  console.log(error)
				  }
				)
				
				
				/* if(this.forgotForm.value.email == '' || this.forgotForm.value.email == null){
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
						this.form_error = 'We have send a password reset link to your email ';
						return false;
				  }
			  },
			  error => {
				  console.log(error)
			  }
			) */
		
	}
  

}
