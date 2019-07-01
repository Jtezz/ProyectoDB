import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMedicoEspecComponent } from './buscar-medico-espec.component';

describe('BuscarMedicoEspecComponent', () => {
  let component: BuscarMedicoEspecComponent;
  let fixture: ComponentFixture<BuscarMedicoEspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarMedicoEspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMedicoEspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
