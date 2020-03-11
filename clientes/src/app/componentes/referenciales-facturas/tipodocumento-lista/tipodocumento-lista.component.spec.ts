import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentoListaComponent } from './tipodocumento-lista.component';

describe('TipodocumentoListaComponent', () => {
  let component: TipodocumentoListaComponent;
  let fixture: ComponentFixture<TipodocumentoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodocumentoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocumentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
