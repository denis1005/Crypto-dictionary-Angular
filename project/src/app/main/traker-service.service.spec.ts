import { TestBed } from '@angular/core/testing';

import { TracerServiceService } from './tracer-service.service';

describe('TracerServiceService', () => {
  let service: TracerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
