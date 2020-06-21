import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import Film from '../models/Film';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  @Input() film: Film;
  @Output() buy = new EventEmitter<Film>();


  constructor() { }

  ngOnInit(): void {

  }

  bought() {
    this.buy.emit(this.film);
  }
}
