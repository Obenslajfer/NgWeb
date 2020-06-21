import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Film from '../models/Film';
import { Subject } from 'rxjs';
import IFilmsService from './IFilmsService';

@Injectable({
  providedIn: 'root'
})
export class FilmsService implements IFilmsService {

  films = new Subject<Film[]>();

  constructor(private http: HttpClient) { }


  getFilms(){
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {

      console.log(data);
      const filmsFromApi: Film[] = data.map(film => {
        const filmObject = new Film();
        filmObject.filmTitle = film.name;
        filmObject.filmPoster = film.imageUrl;
        filmObject.filmYear = film.year;
        filmObject.filmId = film.id;
        filmObject.filmPrice = film.price;
        return filmObject;
      });

      this.films.next(filmsFromApi);
    });



  }
}
