import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidaFormularioComponent } from './unida-formulario.component';

describe('UnidaFormularioComponent', () => {
  let component: UnidaFormularioComponent;
  let fixture: ComponentFixture<UnidaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
