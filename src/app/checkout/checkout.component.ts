import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import Cart from '../models/Cart';
import { SetOrderService } from '../service/set-order.service';
import Form from '../models/Form';
import Film from '../models/Film';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutFilms: Film[] = JSON.parse(localStorage.getItem('cart')) || [];
  total = 0;

  finalOrder = this.fb.group({
    lastname: [''],
    email: [''],
    street: [''],
    zip: [''],
    city: [''],
    name: ['', Validators.required],
    paymentMethod: [''],
  });



  constructor(private fb: FormBuilder, private service: SetOrderService) { }

  ngOnInit(): void {

    let totalPrice = 0;
    this.checkoutFilms.forEach(price =>{
      this.total += price.filmPrice * price.filmQuantity;
    });
    totalPrice = this.total;
    console.log(this.total);

  }

  sendOrder() {

    const order = this.finalOrder.value;
    order.totalPrice = this.total;
    order.films = [];
    const films = this.checkoutFilms.map((f) => {
      return {
        productId: f.filmId,
        amount: f.filmQuantity
      };
    });
    films.forEach(film => {
      order.films.push(film);
    });
    console.log(films);
    console.log(order);

    this.service.addOrder(order);

  }

}
