import { TestBed } from '@angular/core/testing';

import { JobsService } from './jobs.service';

describe('JobService', () => {
  let service: JobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
