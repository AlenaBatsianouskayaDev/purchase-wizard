import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { IPlan } from 'src/app/interfaces/plan.interface';
import { OrderService } from './../../../services/order.service';
import { IOrder } from './../../../interfaces/order.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() plan?: IPlan;

  constructor(
    private router: Router,
    private orderService: OrderService
    ) { }

  goPayment(): void {
    const order: IOrder = {
      planName: this.plan?.name,
      price: this.plan?.price,
      currency: this.plan?.currency
    }
    this.orderService.paymentInfo$.next(order)
    this.router.navigate(['/payment'])
  }
}
