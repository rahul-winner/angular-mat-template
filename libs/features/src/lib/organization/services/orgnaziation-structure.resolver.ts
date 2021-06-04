import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { OrgDataService } from './org-data.service';

@Injectable()
export class OrgnaziationStructureResolver implements Resolve<boolean> {

  constructor(private orgDataService: OrgDataService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // eslint-disable-next-line no-restricted-syntax
    console.debug('... receiving data.. ');
    return of(true);
  }
  
}
