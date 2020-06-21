import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../service/films.service';
import Film from '../models/Film';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  carts: Film[] = JSON.parse(localStorage.getItem('cart')) || [];

  constructor(private service: FilmsService, private http: HttpClient) { }

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
    console.log(this.carts);


  }

}
