import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHMComponent } from './buscar-h-m.component';

describe('BuscarHMComponent', () => {
  let component: BuscarHMComponent;
  let fixture: ComponentFixture<BuscarHMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarHMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
