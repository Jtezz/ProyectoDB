import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteExamenComponent } from './paciente-examen.component';

describe('PacienteExamenComponent', () => {
  let component: PacienteExamenComponent;
  let fixture: ComponentFixture<PacienteExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
