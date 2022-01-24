import { Injectable } from '@angular/core';

import { plans } from './../data/plans';
import { IPlan } from './../interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  public personalPlansList: IPlan[] = plans.personalPlans;
  public enterprisePlansList: IPlan[] = plans.enterprisePlans;

  public getPlanById(id: string): IPlan {
    const personalPlan = this.personalPlansList.find(item => item.id === id);

    if (personalPlan) {
      return personalPlan;
    }

    const enterprisePlan = this.enterprisePlansList.find(item => item.id === id);

    if (enterprisePlan) {
      return enterprisePlan;
    }

    return this.enterprisePlansList[0];
  }
}
