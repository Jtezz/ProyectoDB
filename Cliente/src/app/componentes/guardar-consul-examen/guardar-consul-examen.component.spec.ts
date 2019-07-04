import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarConsulExamenComponent } from './guardar-consul-examen.component';

describe('GuardarConsulExamenComponent', () => {
  let component: GuardarConsulExamenComponent;
  let fixture: ComponentFixture<GuardarConsulExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarConsulExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarConsulExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
