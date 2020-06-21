import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Form from '../models/Form';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  fetchedOrders = new Subject<Form>();

  constructor(private http: HttpClient) { }

  fetchOrders(){
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=1998')
    .subscribe((fetchedData: any) => {
      this.fetchedOrders.next(fetchedData);
    });
  }


}
