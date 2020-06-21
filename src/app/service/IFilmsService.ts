import Film from '../models/Film';
import { Subject } from 'rxjs';


export default interface IFilmsService {
  films: Subject<Film[]>;

  getFilms(): void;

}
