import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidaListaComponent } from './unida-lista.component';

describe('UnidaListaComponent', () => {
  let component: UnidaListaComponent;
  let fixture: ComponentFixture<UnidaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
