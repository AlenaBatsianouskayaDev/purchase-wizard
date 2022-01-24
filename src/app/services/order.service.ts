import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IOrder } from './../interfaces/order.interface';
import { ICard } from './../interfaces/card.interface';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public cardInfo$: BehaviorSubject<ICard | null> = new BehaviorSubject<ICard | null>(null);
  public paymentInfo$: BehaviorSubject<IOrder | null> = new BehaviorSubject<IOrder | null>(null);
}
