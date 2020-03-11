import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoListaComponent } from './impuesto-lista.component';

describe('ImpuestoListaComponent', () => {
  let component: ImpuestoListaComponent;
  let fixture: ComponentFixture<ImpuestoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuestoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
