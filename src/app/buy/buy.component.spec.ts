import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyComponent } from './buy.component';
import Film from '../models/Film';
import { FilmsComponent } from '../films/films.component';

describe('BuyComponent', () => {
  let component: BuyComponent;
  let fixture: ComponentFixture<BuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyComponent, FilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should send data ', () => {

    const spy = spyOn(component.buy, 'emit');
    component.bought();
    expect(spy).toHaveBeenCalled();
  });

});
