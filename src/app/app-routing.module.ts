import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanSelectionPageComponent } from './components/plan-selection-page/plan-selection-page.component';

import { OrderPreviewComponent } from './components/order-preview-page/order-preview/order-preview.component';
import { CompletedPageComponent } from './components/purchase-completed-page/completed-page/completed-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';

const routes: Routes = [
  { path: '', component: PlanSelectionPageComponent, pathMatch: 'full'},
  { path: 'payment', component: PaymentPageComponent}, 
  { path: 'order-preview', component: OrderPreviewComponent},
  { path: 'completed', component: CompletedPageComponent },
  { path: '**', redirectTo: ""}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
