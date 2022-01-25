import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPlan, IPlans } from './../interfaces/plans.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(
    private _http: HttpClient,
  ) { }
  
  public getPlans(): Observable<IPlans> {
    return this._http.get<IPlans>(`assets/data.json`);
  }
}
