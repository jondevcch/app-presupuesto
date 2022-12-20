import { TestBed } from '@angular/core/testing';

import { GastoServiceService } from './gasto-service.service';

describe('GastoServiceService', () => {
  let service: GastoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
