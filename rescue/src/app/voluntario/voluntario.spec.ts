import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voluntario } from './voluntario';

describe('Voluntario', () => {
  let component: Voluntario;
  let fixture: ComponentFixture<Voluntario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voluntario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Voluntario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
