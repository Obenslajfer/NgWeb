import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }


  deleteOrderForm(id: number): Observable<{}>{
    const url = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/';
    const fullUrl = `${url}/${id}`;
    return this.http.delete(fullUrl);
  }
}
