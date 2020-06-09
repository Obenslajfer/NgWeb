import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import Cart from '../models/Cart';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  carts: Cart[] = [];

  constructor() { }

  ngOnInit(): void {

    const storedCart = JSON.parse(localStorage.cart);
    this.carts = storedCart;
    console.log(this.carts);
  }

}
