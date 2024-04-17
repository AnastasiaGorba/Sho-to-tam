import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { filter } from 'rxjs/operators';
import { NavigationStart } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn()){
    this.router.navigate(['sign'])
      return false;
    }
    return true;
  }
    
  canDeactivate(component: unknown, currentRoute: ActivatedRouteSnapshot,currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    localStorage.removeItem('token');
    // if(confirm('Are you sure?')) {
    //   localStorage.removeItem('token')
    //   return true
    // }
    return true;
    }
}
