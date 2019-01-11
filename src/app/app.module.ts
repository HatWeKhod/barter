import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

// core
import { CoreModule } from "./core/core.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FormLoginModalComponent } from './form-modal/form-login-modal.component';
import { FormForgotPassModalComponent } from './form-modal/form-forgot-pass-modal.component';
import { UserLoginComponent } from './layout/user-login/user-login.component';
import { UserRegisterComponent } from './layout/user-register/user-register.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './layout/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    FormModalComponent,
	FormLoginModalComponent,
	FormForgotPassModalComponent,
	UserLoginComponent,
	UserRegisterComponent,
	ForgotPasswordComponent,
	ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
	NgbModule.forRoot(),
    CoreModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents: [
	  FormModalComponent,
	  FormLoginModalComponent,
	  FormForgotPassModalComponent
	]
})
export class AppModule { }
