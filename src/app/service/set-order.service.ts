import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';
import Form from '../models/Form';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class SetOrderService {

  date: string;

  forms = new Subject<Form[]>();

  constructor(private http: HttpClient, datePipe: DatePipe) {
    this.date = datePipe.transform(Date.now(), 'MMMM d, y h:mm:ss');
   }

  addOrder(form: Form) {
    console.log(form);
    this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', {
      companyId: 1998,
      created: this.date,
      // tslint:disable-next-line: max-line-length
      createdBy: 'Name: ' + form.name + ', ' + 'lastname: ' + form.lastname + ', ' + 'Street: ' + form.street + ', ' + 'ZipCode: ' + form.zip + ', ' + 'City: ' + form.city,
      paymentMethod: form.paymentMethod,
      totalPrice: form.totalPrice,
      orderRows: form.films
    })
    .subscribe((postData) => {
      console.log(postData);
    });
  }

}
