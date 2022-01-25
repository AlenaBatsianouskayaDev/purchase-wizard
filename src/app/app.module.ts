import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanSelectionComponent } from './components/plan-selection-page/plan-selection/plan-selection.component';
import { ItemCardComponent } from './components/plan-selection-page/item-card/item-card.component';
import { PaymentComponent } from './components/payment-page/payment/payment.component';
import { OrderPreviewComponent } from './components/order-preview-page/order-preview/order-preview.component';
import { CompletedPageComponent } from './components/purchase-completed-page/completed-page/completed-page.component';
import { PlanSelectionPageComponent } from './components/plan-selection-page/plan-selection-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanSelectionComponent,
    ItemCardComponent,
    PaymentComponent,
    OrderPreviewComponent,
    CompletedPageComponent,
    PlanSelectionPageComponent,
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
