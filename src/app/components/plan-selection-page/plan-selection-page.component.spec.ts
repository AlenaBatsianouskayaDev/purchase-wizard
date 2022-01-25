import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSelectionPageComponent } from './plan-selection-page.component';

describe('PlanSelectionPageComponent', () => {
  let component: PlanSelectionPageComponent;
  let fixture: ComponentFixture<PlanSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSelectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
