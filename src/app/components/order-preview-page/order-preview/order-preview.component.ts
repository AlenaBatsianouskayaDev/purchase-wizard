import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { IOrder } from 'src/app/interfaces/order.interface';
import { ICard } from 'src/app/interfaces/card.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {
  
  isLoading: boolean = false;
  order: BehaviorSubject<IOrder | null> | undefined;
  card: BehaviorSubject<ICard | null> | undefined;

  constructor(
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.order = this.orderService.paymentInfo$;
    this.card = this.orderService.cardInfo$;
  }

  purchase(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/completed']);
    }, 10000)
  }
}
