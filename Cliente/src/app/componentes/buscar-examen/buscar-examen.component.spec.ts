import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarExamenComponent } from './buscar-examen.component';

describe('BuscarExamenComponent', () => {
  let component: BuscarExamenComponent;
  let fixture: ComponentFixture<BuscarExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
