import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Migapan } from './migapan';

describe('Migapan', () => {
  let component: Migapan;
  let fixture: ComponentFixture<Migapan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Migapan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Migapan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
