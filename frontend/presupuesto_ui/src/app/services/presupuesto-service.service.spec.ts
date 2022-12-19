import { TestBed } from '@angular/core/testing';

import { PresupuestoServiceService } from './presupuesto-service.service';

describe('PresupuestoServiceService', () => {
  let service: PresupuestoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresupuestoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
