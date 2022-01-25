import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IOrder } from './../interfaces/order.interface';
import { ICard } from './../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public cardData$: BehaviorSubject<ICard | null> = new BehaviorSubject<ICard | null>(null);
  public paymentData$: BehaviorSubject<IOrder | null> = new BehaviorSubject<IOrder | null>(null);

  getCardType(value: number): string {
    let cardType = '';
    switch (value.toString()[0]) {
      case '3': cardType = 'American Express';
        break;
      case '4': cardType = 'Visa';
        break;
      case '5': cardType = 'MasterCard';
        break;
      case '6': cardType = 'Discover';
        break;
    }
    return cardType;
  }

}
