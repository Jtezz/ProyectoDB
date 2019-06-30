import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraMedicogComponent } from './hora-medicog.component';

describe('HoraMedicogComponent', () => {
  let component: HoraMedicogComponent;
  let fixture: ComponentFixture<HoraMedicogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraMedicogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraMedicogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
