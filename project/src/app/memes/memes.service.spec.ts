import { TestBed } from '@angular/core/testing';

import { MemesService } from './memes.service';

describe('MemesService', () => {
  let service: MemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
