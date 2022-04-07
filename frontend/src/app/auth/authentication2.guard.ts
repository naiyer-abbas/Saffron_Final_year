import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authentication2Guard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isnotLoggedIn();
  }

  isnotLoggedIn(){
    return true
    if(!localStorage.getItem("userLoggedIn"))
    {
      return true;
    }
    this.router.navigateByUrl('dashboard');
    return false;
  }
  
}
