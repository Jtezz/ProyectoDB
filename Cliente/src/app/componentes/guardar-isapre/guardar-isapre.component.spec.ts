import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarIsapreComponent } from './guardar-isapre.component';

describe('GuardarIsapreComponent', () => {
  let component: GuardarIsapreComponent;
  let fixture: ComponentFixture<GuardarIsapreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarIsapreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarIsapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
