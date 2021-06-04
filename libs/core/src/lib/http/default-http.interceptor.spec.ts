import { TestBed } from '@angular/core/testing';

import { DefaultHttpInterceptor } from './default-http.interceptor';

describe('DefaultHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DefaultHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DefaultHttpInterceptor = TestBed.inject(DefaultHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
