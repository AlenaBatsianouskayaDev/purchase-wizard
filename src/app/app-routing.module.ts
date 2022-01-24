import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanSelectionComponent } from './components/plan-selection-page/plan-selection/plan-selection.component';
import { PaymentComponent } from './components/payment-page/payment/payment.component';

const routes: Routes = [
  { path: '', component: PlanSelectionComponent, pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent}, 
  // { path: 'order-preview', component:  },
  // { path: 'purchase-completed', component:  },
  { path: '**', redirectTo: ""}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
