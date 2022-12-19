import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantPresupuestoComponent } from './mant-presupuesto.component';

describe('MantPresupuestoComponent', () => {
  let component: MantPresupuestoComponent;
  let fixture: ComponentFixture<MantPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantPresupuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
