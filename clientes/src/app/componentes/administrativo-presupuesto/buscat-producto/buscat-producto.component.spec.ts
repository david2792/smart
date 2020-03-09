import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscatProductoComponent } from './buscat-producto.component';

describe('BuscatProductoComponent', () => {
  let component: BuscatProductoComponent;
  let fixture: ComponentFixture<BuscatProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscatProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscatProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
