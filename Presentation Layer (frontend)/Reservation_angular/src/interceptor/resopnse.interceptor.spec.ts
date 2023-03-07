import { TestBed } from '@angular/core/testing';

import { ResopnseInterceptor } from './resopnse.interceptor';

describe('ResopnseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResopnseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResopnseInterceptor = TestBed.inject(ResopnseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
