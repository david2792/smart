import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaListaComponent } from './familia-lista.component';

describe('FamiliaListaComponent', () => {
  let component: FamiliaListaComponent;
  let fixture: ComponentFixture<FamiliaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
