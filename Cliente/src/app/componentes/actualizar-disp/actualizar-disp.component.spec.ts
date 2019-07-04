import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDispComponent } from './actualizar-disp.component';

describe('ActualizarDispComponent', () => {
  let component: ActualizarDispComponent;
  let fixture: ComponentFixture<ActualizarDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
