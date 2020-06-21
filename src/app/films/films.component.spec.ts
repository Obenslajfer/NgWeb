import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FilmsComponent } from './films.component';
import Film from '../models/Film';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a movie to my cart', () => {
    const moviesFromStart = component.carts.length;

    const newTestFilm = new Film();
    newTestFilm.filmId = 112;
    newTestFilm.filmPoster = "movie.jpg";
    newTestFilm.filmPrice = 119;
    newTestFilm.filmQuantity = 0;
    newTestFilm.filmTitle = "Point Break";
    newTestFilm.filmYear = 1998;

    component.done(newTestFilm);

    const moviesAtTheEnd = component.carts.length;

    expect(moviesAtTheEnd).toBe(moviesFromStart + 1);
  });

});
