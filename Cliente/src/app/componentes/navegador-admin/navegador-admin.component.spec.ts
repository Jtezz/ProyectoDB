import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorAdminComponent } from './navegador-admin.component';

describe('NavegadorAdminComponent', () => {
  let component: NavegadorAdminComponent;
  let fixture: ComponentFixture<NavegadorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegadorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
