import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosFormularioComponent } from './usuarios-formulario.component';

describe('UsuariosFormularioComponent', () => {
  let component: UsuariosFormularioComponent;
  let fixture: ComponentFixture<UsuariosFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
