import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionesFormularioComponent } from './presentaciones-formulario.component';

describe('PresentacionesFormularioComponent', () => {
  let component: PresentacionesFormularioComponent;
  let fixture: ComponentFixture<PresentacionesFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionesFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
