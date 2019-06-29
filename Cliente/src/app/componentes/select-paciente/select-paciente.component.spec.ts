import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPacienteComponent } from './select-paciente.component';

describe('SelectPacienteComponent', () => {
  let component: SelectPacienteComponent;
  let fixture: ComponentFixture<SelectPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
