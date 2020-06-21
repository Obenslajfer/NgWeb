import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import Film from '../models/Film';
import { JsonPipe } from '@angular/common';
import { DeleteService } from '../service/delete.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  theOrders;
  constructor(private service: AdminService, private deleteservice: DeleteService) { }

  ngOnInit(): void {
    this.service.fetchedOrders.subscribe((fetchData) => {
     this.theOrders = fetchData;
     console.log(this.theOrders);
    });
    this.service.fetchOrders();
  }

  deleteOrder(id: number) {
    this.deleteservice
    .deleteOrderForm(id)
    .subscribe();

    window.location.reload();
    localStorage.clear();
  }



}
