import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SetOrderService } from './set-order.service';
import { DatePipe } from '@angular/common';

describe('SetOrderService', () => {
  let service: SetOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatePipe]
    });
    service = TestBed.inject(SetOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
