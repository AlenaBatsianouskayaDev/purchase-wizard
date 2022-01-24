import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil} from 'rxjs/operators';
import { Subject } from "rxjs";

import { COUNTRIES } from './../../../data/countries';
import { ICountries } from './../../../interfaces/countries.interface';
import { ICard } from './../../../interfaces/card.interface';
import { OrderService } from './../../../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {

  form: FormGroup;
  countries: ICountries[] = COUNTRIES;
  isLoading: boolean = false;
  isUSA: boolean = false;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private orderService: OrderService
  ) {
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street1: new FormControl('', [Validators.required]),
      street2: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16)
        ]),
      ccv: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3)
        ]),
      cardType: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required])
    })
    this.checkIsUSA();
    this.detectCardNumberValueChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitPayment(): void {
    this.isLoading = true;
    const card: ICard = {
      cardNumber: this.form.value.cardNumber
    }
    this.orderService.cardInfo$.next(card)
    this.router.navigate(['/confirmation']);
  }

  detectCardNumberValueChanges(): void {
    this.form.get('cardNumber')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => value.length >= 4 && this.fillFormFields());
  }

  fillFormFields(): void {
    const formPatchData = {
      cardType: this.getCardType(this.form.get('cardNumber')?.value)
    };
    this.form.patchValue(formPatchData);
  }

  getCardType(value: number): string {
    let cardType = '';
    switch (value.toString()[0]) {
      case '4': cardType = 'Visa';
        break;
      case '5': cardType = 'MasterCard';
        break;
      case '3': cardType = 'American Express';
        break;
      case '6': cardType = 'Discover';
        break;
    }
    return cardType;
  }

  checkIsUSA(): void {
    this.form.get('country')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(country => {
        this.isUSA = country === 'United States of America (the)';
        if (this.isUSA) {
          this.form.addControl('state', new FormControl(null, [Validators.required]));
        }else{
          this.form.removeControl('state');
        }
      })
  }
}
