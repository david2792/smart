import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasListaComponent } from './empresas-lista.component';

describe('EmpresasListaComponent', () => {
  let component: EmpresasListaComponent;
  let fixture: ComponentFixture<EmpresasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
