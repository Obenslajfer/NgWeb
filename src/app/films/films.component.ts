import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../service/films.service';
import Film from '../models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  cart = [];

  constructor(private service: FilmsService) { }

  ngOnInit(): void {
    this.service.films.subscribe((filmData: Film[]) => {

      console.log(filmData);
      this.films = filmData;

    });
    this.service.getFilms();
  }

  done(clickedMovie: Film){

    if (this.cart.includes(clickedMovie) === true){
      ++clickedMovie.filmQuantity;
      console.log(this.cart);
    }
    else {
      this.cart.push((clickedMovie));
      console.log(this.cart);
    }
    localStorage.cart = JSON.stringify(this.cart);
  }

}
