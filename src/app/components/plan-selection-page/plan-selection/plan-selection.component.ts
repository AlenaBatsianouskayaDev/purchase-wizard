import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { PlanService } from './../../../services/plan.service';
import { IPlan } from './../../../interfaces/plan.interface';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent implements OnInit {

  public personalPlansList?: IPlan[];
  public enterprisePlansList?: IPlan[];
  
  
  constructor(
    private router: Router,
    private planService: PlanService,
    ) {}

    ngOnInit(): void {
      this.personalPlansList = this.planService.personalPlansList;
      this.enterprisePlansList = this.planService.enterprisePlansList;
    }
}
