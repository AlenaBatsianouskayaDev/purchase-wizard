import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { IOrder } from './../../../interfaces/order.interface';
import { ICard } from './../../../interfaces/card.interface';
import { OrderService } from './../../../services/order.service';

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
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.order = this.orderService.paymentData$;
    this.card = this.orderService.cardData$;
  }

  purchase(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/completed']);
    }, 10000)
  }
}
