import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Film from '../models/Film';
import IFilmsService from './IFilmsService';

export class MockFilmsService implements IFilmsService {
  films = new Subject<Film[]>();

  constructor(private http: HttpClient){}

  getFilms(){

      this.films.next([{
        filmId: 900,
        filmPoster: '',
        filmTitle: 'Indiana Jones and the last Crusade',
        filmPrice: 2000,
        filmQuantity: 1,
        filmYear: 1989
      }, {
        filmId: 901,
        filmPoster: '',
        filmTitle: 'Indiana Jones and the Temple of Doom',
        filmPrice: 1,
        filmQuantity: 1,
        filmYear: 1984
      }]);


  }
}
