import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoFormularioComponent } from './impuesto-formulario.component';

describe('ImpuestoFormularioComponent', () => {
  let component: ImpuestoFormularioComponent;
  let fixture: ComponentFixture<ImpuestoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuestoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
