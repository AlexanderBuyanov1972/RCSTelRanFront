import { TestBed } from '@angular/core/testing';

import { RentCompanyService } from '../app/services/rent-company.service';

describe('RentCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentCompanyService = TestBed.get(RentCompanyService);
    expect(service).toBeTruthy();
  });
});
