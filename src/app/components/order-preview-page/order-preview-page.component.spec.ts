import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPreviewPageComponent } from './order-preview-page.component';

describe('OrderPreviewPageComponent', () => {
  let component: OrderPreviewPageComponent;
  let fixture: ComponentFixture<OrderPreviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPreviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
