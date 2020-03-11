import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasFormularioComponent } from './empresas-formulario.component';

describe('EmpresasFormularioComponent', () => {
  let component: EmpresasFormularioComponent;
  let fixture: ComponentFixture<EmpresasFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
