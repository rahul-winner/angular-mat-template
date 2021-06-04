import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  providers: [],
})
export class SharedModule {
  /**
   * import to root module.
   * adding a service here in 'providers' array will have be singleton across app.
   */
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  /**
   * for importing into feature modules.
   * adding a service here in 'providers' array get a separate instance for each feature module.
   */
  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
