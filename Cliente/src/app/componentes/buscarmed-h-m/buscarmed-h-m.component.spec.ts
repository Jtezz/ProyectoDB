import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarmedHMComponent } from './buscarmed-h-m.component';

describe('BuscarmedHMComponent', () => {
  let component: BuscarmedHMComponent;
  let fixture: ComponentFixture<BuscarmedHMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarmedHMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarmedHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
