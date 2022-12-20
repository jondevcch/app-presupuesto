import { TestBed } from '@angular/core/testing';

import { CatalogosServicesService } from './catalogos-services.service';

describe('CatalogosServicesService', () => {
  let service: CatalogosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
