import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductistComponent } from './productist.component';

describe('ProductistComponent', () => {
  let component: ProductistComponent;
  let fixture: ComponentFixture<ProductistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
