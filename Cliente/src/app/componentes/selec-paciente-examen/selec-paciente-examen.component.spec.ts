import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecPacienteExamenComponent } from './selec-paciente-examen.component';

describe('SelecPacienteExamenComponent', () => {
  let component: SelecPacienteExamenComponent;
  let fixture: ComponentFixture<SelecPacienteExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecPacienteExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecPacienteExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
