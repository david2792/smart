import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoFormularioComponent } from './tipodocumento-formulario.component';

describe('TipodocumentoFormularioComponent', () => {
  let component: TipodocumentoFormularioComponent;
  let fixture: ComponentFixture<TipodocumentoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodocumentoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
