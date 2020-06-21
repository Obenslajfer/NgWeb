import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import Film from '../models/Film';
import { CheckoutComponent } from '../checkout/checkout.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  films: Film[] = JSON.parse(localStorage.getItem('cart')) || [];


  constructor() { }

  totalPrice = 0;

  ngOnInit(): void {
    this.calPrice();
  }

  calPrice() {
    let total = 0;
    this.films.forEach(item => {
      total += item.filmQuantity * item.filmPrice;
      console.log(total);

    });
    this.totalPrice = total;
  }

  clearCart(){
    localStorage.clear();
    window.location.reload();
  }

  increaseQ(a){
    ++a.filmQuantity;
    localStorage.setItem('cart', JSON.stringify(this.films));
    this.calPrice();

  }

  decreaseQ(a){
    if (a.filmQuantity === 1 ) {
      this.removeOrder(a);
    }
    else {
    --a.filmQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(this.films));
    this.calPrice();

  }

  removeOrder(a){
    const indexOf = this.films.indexOf(a);

    if (indexOf !== -1) {
      this.films.splice(indexOf, 1);
    }

    localStorage.setItem('cart', JSON.stringify(this.films));
    this.calPrice();

  }


}
