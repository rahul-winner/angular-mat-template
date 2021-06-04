import { TestBed } from '@angular/core/testing';

import { OrgnaziationStructureResolver } from './orgnaziation-structure.resolver';

describe('OrgnaziationStructureResolver', () => {
  let resolver: OrgnaziationStructureResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OrgnaziationStructureResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
