import { Injectable } from '@angular/core';
import { RestService } from '@kat/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class OrgDataService {

  constructor(private restService: RestService) {
    
  }

  store(data: any) {

  }

  fetchOrgData(): Observable<any> {
    return of();
  }

}
