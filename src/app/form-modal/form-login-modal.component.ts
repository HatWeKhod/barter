import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal.component';
import { FormForgotPassModalComponent } from './form-forgot-pass-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form--login-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormLoginModalComponent implements OnInit {
	loginForm: FormGroup;
	random_no = '';
	form_error = '';
	pass_error = '';
	c_pass_error = '';
	email_err = '';
	username_err = '';
	constructor(
		private router: Router,
		public activeModal: NgbActiveModal,
		private modalService: NgbModal,
		 private loginService: LoginService
	) { }

	ngOnInit() {
		this.loginForm = new FormGroup({
		  'email': new FormControl(null),
		  'password': new FormControl( null)	  
		});
	}
	closeModal() {
		this.activeModal.close('Modal Closed');
	}
	openFormModal(page) {
		console.log(page);
		if(page == 'register'){
			const modalRef = this.modalService.open(FormModalComponent);
		modalRef.result.then((result) => {
			console.log(result);
		  }).catch((error) => {
			console.log(error);
		  });
		}
		if(page == 'forgotpass'){
			
			const modalRef = this.modalService.open(FormForgotPassModalComponent);
		modalRef.result.then((result) => {
			console.log(result);
		  }).catch((error) => {
			console.log(error);
		  });
		}
		
	  
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
						this.random_no = Math.random().toString();
						
						localStorage.setItem('isLoggedin', 'true')
						localStorage.setItem('fbId', this.random_no)
						localStorage.setItem('login_type', this.random_no)
						localStorage.setItem('name', res['user'].name)
						localStorage.setItem('user_email', res['user'].email)
						this.router.navigate(['/home']); 
						return false;
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
