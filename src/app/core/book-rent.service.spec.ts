import { TestBed } from '@angular/core/testing';

import { BookRentService } from './book-rent.service';

describe('BookRentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookRentService = TestBed.get(BookRentService);
    expect(service).toBeTruthy();
  });
});
