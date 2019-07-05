import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDiagnosticoComponent } from './update-diagnostico.component';

describe('UpdateDiagnosticoComponent', () => {
  let component: UpdateDiagnosticoComponent;
  let fixture: ComponentFixture<UpdateDiagnosticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDiagnosticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
