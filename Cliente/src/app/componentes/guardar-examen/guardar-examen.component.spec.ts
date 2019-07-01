import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarExamenComponent } from './guardar-examen.component';

describe('GuardarExamenComponent', () => {
  let component: GuardarExamenComponent;
  let fixture: ComponentFixture<GuardarExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
