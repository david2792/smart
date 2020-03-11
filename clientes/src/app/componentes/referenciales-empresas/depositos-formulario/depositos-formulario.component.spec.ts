import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosFormularioComponent } from './depositos-formulario.component';

describe('DepositosFormularioComponent', () => {
  let component: DepositosFormularioComponent;
  let fixture: ComponentFixture<DepositosFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositosFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
