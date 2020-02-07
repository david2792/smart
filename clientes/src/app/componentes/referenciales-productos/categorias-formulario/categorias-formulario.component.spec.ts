import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasFormularioComponent } from './categorias-formulario.component';

describe('CategoriasFormularioComponent', () => {
  let component: CategoriasFormularioComponent;
  let fixture: ComponentFixture<CategoriasFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
