import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasListaComponent } from './marcas-lista.component';

describe('MarcasListaComponent', () => {
  let component: MarcasListaComponent;
  let fixture: ComponentFixture<MarcasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
