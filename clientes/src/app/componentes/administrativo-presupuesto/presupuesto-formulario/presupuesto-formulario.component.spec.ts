import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoFormularioComponent } from './presupuesto-formulario.component';

describe('PresupuestoFormularioComponent', () => {
  let component: PresupuestoFormularioComponent;
  let fixture: ComponentFixture<PresupuestoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
