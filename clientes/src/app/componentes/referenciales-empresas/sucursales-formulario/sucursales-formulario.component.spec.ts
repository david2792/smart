import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesFormularioComponent } from './sucursales-formulario.component';

describe('SucursalesFormularioComponent', () => {
  let component: SucursalesFormularioComponent;
  let fixture: ComponentFixture<SucursalesFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalesFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
