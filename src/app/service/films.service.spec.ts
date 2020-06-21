import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { FilmsService } from './films.service';
import Data from '../models/Data';

describe('FilmsService', () => {

  let service = FilmsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test a Get response',() => {
    const testData: Data = {name: 'TestData'};

    httpClient.get<Data>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe(data =>
      expect(data).toEqual(testData)
      );

    const req = httpTestingController.expectOne('https://medieinstitutet-wie-products.azurewebsites.net/api/products');

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });


  it('can catch 404 errors', () => {
    const msg = 'This is a 404 error';

    httpClient.get<Data[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe(data => fail('Should have failed with the 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404, 'Status');
      expect(error.error).toEqual(msg, 'Message');

    }
  );

  const req = httpTestingController.expectOne('https://medieinstitutet-wie-products.azurewebsites.net/api/products');

  req.flush(msg, { status:404, statusText:'Not found' });
  });



});
