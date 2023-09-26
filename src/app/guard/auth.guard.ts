import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    const requiredRoles: any = route.data['roles']

    if (!this._authService.isLoggedIn()
      || requiredRoles === undefined || !(requiredRoles instanceof Array)
      || requiredRoles.length === 0 || !requiredRoles.every((role) => this._authService.getRoles().includes(role))) {
      this._authService.logout();
      this._router.navigate(['']);
      return false;
    }

    return true;
  }
}
