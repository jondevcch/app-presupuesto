import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantGastoComponent } from './mant-gasto.component';

describe('MantGastoComponent', () => {
  let component: MantGastoComponent;
  let fixture: ComponentFixture<MantGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantGastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
