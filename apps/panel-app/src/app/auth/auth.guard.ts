import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthModule } from './auth.module';

@Injectable({
  providedIn: AuthModule,
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // eslint-disable-next-line no-restricted-syntax
    console.debug('.. canLoad: verify user permissions');
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // eslint-disable-next-line no-restricted-syntax
    console.debug('.. canActivate: verify user permissions');
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // eslint-disable-next-line no-restricted-syntax
    console.debug('.. canActivateChild: verify user permissions');
    return this.canActivate(childRoute, state);
  }
}
