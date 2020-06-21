import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../service/films.service';
import Film from '../models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit{
  films: Film[] = [];
  carts: Film[] = JSON.parse(localStorage.getItem('cart')) || [];

  constructor(private service: FilmsService) { }

  ngOnInit(): void {
    this.service.films.subscribe((filmData: Film[]) => {
    this.films = filmData;
    });
    this.service.getFilms();

  }

  done(clickedMovie: Film){
    if (this.carts.includes(clickedMovie) === true){
      ++clickedMovie.filmQuantity;

    }
    else {
      this.carts.push((clickedMovie));
    }
    localStorage.setItem('cart', JSON.stringify(this.carts));

  }

}
