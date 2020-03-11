import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasFormularioComponent } from './marcas-formulario.component';

describe('MarcasFormularioComponent', () => {
  let component: MarcasFormularioComponent;
  let fixture: ComponentFixture<MarcasFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
