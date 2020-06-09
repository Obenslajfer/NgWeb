import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Film from '../models/Film';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  films = new Subject<Film[]>();

  constructor(private http: HttpClient) { }


  getFilms() {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {

      const filmsFromApi: Film[] = data.map(film => {
        const filmObject = new Film();
        filmObject.filmTitle = film.name;
        filmObject.filmPoster = film.imageUrl;
        filmObject.filmYear = film.year;
        filmObject.filmId = film.id;
        return filmObject;
      });

      this.films.next(filmsFromApi);
    });



  }
}
