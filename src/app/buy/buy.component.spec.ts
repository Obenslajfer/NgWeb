import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyComponent } from './buy.component';
import { FilmsComponent } from '../films/films.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuyComponent', () => {
  let component: BuyComponent;
  let fixture: ComponentFixture<BuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyComponent, FilmsComponent ],
      imports: [ HttpClientTestingModule ]
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
    component.ngOnInit();
    const spy = spyOn(component.buy, 'emit');
    component.bought();
    expect(spy).toHaveBeenCalled();
  });

});
