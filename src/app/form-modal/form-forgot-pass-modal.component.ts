import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-forgot-pass-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormForgotPassModalComponent implements OnInit {
	forgotForm: FormGroup;
	
	form_error = '';
	constructor(
		private router: Router,
		public activeModal: NgbActiveModal,
		private modalService: NgbModal,
		 private loginService: LoginService
	) { }

	ngOnInit() {
		this.forgotForm = new FormGroup({
		  'email': new FormControl(null),
		  'password': new FormControl( null),
		  'c_password':new FormControl( null),	
		});
	}
	closeModal() {
		this.activeModal.close('Modal Closed');
	}
	openFormModal(page) {
		
		if(page == 'forgotpass'){
			const modalRef = this.modalService.open(FormModalComponent);
			modalRef.result.then((result) => {
				console.log(result);
			  }).catch((error) => {
				console.log(error);
			  });
		}
	  
	}
	
	forgotPass(){
		console.log(this.forgotForm);
		
		if(this.forgotForm.value.email != null && this.forgotForm.value.password !=null ){
			if(this.forgotForm.value.password != this.forgotForm.value.c_password){
				this.form_error = 'Password did not match';
				return false;
			}
			if(this.forgotForm.value.email != '' && this.forgotForm.value.password !='' && this.forgotForm.value.c_password !='')
			this.loginService.postForgotPass(this.forgotForm.value).subscribe(
			  res => {
					console.log('here is result coming');
					console.log(res);
			  },
			  error => {
				  console.log(error)
			  }
			)
		}
	}
}
