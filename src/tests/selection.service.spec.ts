import { TestBed } from '@angular/core/testing';

import { SelectionService } from '../app/selection.service';

describe('SelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionService = TestBed.get(SelectionService);
    expect(service).toBeTruthy();
  });
});
