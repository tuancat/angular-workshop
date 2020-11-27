import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log(route, state);

    if (!this.auth.isLoggedIn) {
      alert('May chua login vao login de');
      return this.router.createUrlTree(['/login']);
    }

    return this.auth.isLoggedIn;
  }
}
