import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CandeativateGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!localStorage.getItem('isLoggedin')) {
        console.log("check 1")
        return true;
      }
      else {
        console.log("check 2")
        this.router.navigate(['/']);
        return false;
      }
  }
}
