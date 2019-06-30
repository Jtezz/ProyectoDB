import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarmedicosComponentEsp } from './buscarmedicoesp.component';

describe('BuscarmedicoespComponent', () => {
  let component: BuscarmedicosComponentEsp;
  let fixture: ComponentFixture<BuscarmedicosComponentEsp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarmedicosComponentEsp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarmedicosComponentEsp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
