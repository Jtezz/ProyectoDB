import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHoraComponent } from './buscar-hora.component';

describe('BuscarHoraComponent', () => {
  let component: BuscarHoraComponent;
  let fixture: ComponentFixture<BuscarHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
