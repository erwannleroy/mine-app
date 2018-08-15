import { TestBed, inject } from '@angular/core/testing';

import { JsstoreService } from './jsstore.service';

describe('JsstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsstoreService]
    });
  });

  it('should be created', inject([JsstoreService], (service: JsStoreService) => {
    expect(service).toBeTruthy();
  }));
});
