import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespedirmedicoComponent } from './despedirmedico.component';

describe('DespedirmedicoComponent', () => {
  let component: DespedirmedicoComponent;
  let fixture: ComponentFixture<DespedirmedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespedirmedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespedirmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
