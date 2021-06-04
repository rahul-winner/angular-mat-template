import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DefaultHttpInterceptor } from './http/default-http.interceptor';
import { RestService } from './http/rest.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule {
  /**
   * import to root module.
   * adding a service here in 'providers' array will have be singleton across app.
   */
   static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: DefaultHttpInterceptor, multi: true },
        RestService
      ],
    };
  }

  /**
   * for importing into feature modules.
   * adding a service here in 'providers' array get a separate instance for each feature module.
   */
  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}

export * from './http/rest.service';
