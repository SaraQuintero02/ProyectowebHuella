import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoAdopcion } from './proceso-adopcion';

describe('ProcesoAdopcion', () => {
  let component: ProcesoAdopcion;
  let fixture: ComponentFixture<ProcesoAdopcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoAdopcion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoAdopcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
