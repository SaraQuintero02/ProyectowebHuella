import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adoptables } from './adoptables';

describe('Adoptables', () => {
  let component: Adoptables;
  let fixture: ComponentFixture<Adoptables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adoptables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adoptables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
