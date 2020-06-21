import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeleteService } from './delete.service';

describe('DeleteService', () => {
  let service: DeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
