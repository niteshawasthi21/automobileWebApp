import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  status: boolean = false;
  canActivate() {
    if (localStorage.getItem('email')) {
      this.status = true;
    } else {
      this.status = false;
      Swal.fire("Please Login")
    }
    return this.status;
  }
}
