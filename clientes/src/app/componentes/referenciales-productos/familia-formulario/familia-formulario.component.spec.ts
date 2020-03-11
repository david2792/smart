import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaFormularioComponent } from './familia-formulario.component';

describe('FamiliaFormularioComponent', () => {
  let component: FamiliaFormularioComponent;
  let fixture: ComponentFixture<FamiliaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
