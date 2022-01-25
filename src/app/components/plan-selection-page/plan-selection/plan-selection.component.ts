import { Component, OnInit } from '@angular/core';

import { PlanService } from './../../../services/plan.service';
import { IPlan } from './../../../interfaces/plans.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent implements OnInit {

  public personalPlans$: Observable<IPlan[]>;
  public enterprisePlans$: Observable<IPlan[]>;

  constructor(
    private planService: PlanService,
    ) {}

  ngOnInit(): void {
    this.personalPlans$ = this.planService.getPlans().pipe(
      map(data => data.personalPlans)
    );
    this.enterprisePlans$ = this.planService.getPlans().pipe(
      map(data => data.enterprisePlans)
    );
  }
}
