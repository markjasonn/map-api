import { TestBed } from '@angular/core/testing';

import { ServiceAppStateService } from './service-app-state.service';

describe('ServiceAppStateService', () => {
  let service: ServiceAppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
