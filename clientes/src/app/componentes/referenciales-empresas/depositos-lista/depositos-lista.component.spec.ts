import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosListaComponent } from './depositos-lista.component';

describe('DepositosListaComponent', () => {
  let component: DepositosListaComponent;
  let fixture: ComponentFixture<DepositosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
