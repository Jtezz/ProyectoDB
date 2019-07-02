import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarEspecialidadComponent } from './guardar-especialidad.component';

describe('GuardarEspecialidadComponent', () => {
  let component: GuardarEspecialidadComponent;
  let fixture: ComponentFixture<GuardarEspecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarEspecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
