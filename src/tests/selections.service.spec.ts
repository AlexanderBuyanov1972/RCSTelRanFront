import { TestBed } from '@angular/core/testing';

import { SelectionsService } from '../app/services/selections.service';

describe('SelectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionsService = TestBed.get(SelectionsService);
    expect(service).toBeTruthy();
  });
});
