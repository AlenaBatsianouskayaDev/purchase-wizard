import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { plans } from './../data/plans';
import { IPlan, IPlans } from './../interfaces/plans.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  public personalPlansList: IPlan[] = plans.personalPlans;
  public enterprisePlansList: IPlan[] = plans.enterprisePlans;

  constructor(
    private _http: HttpClient,
  ) { }
  
  public getPlans(): Observable<IPlans> {
    return this._http.get<IPlans>(`assets/data.json`);
  }

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
