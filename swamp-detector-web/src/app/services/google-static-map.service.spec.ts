/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleStaticMapService } from './google-static-map.service';

describe('Service: GoogleStaticMap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleStaticMapService]
    });
  });

  it('should ...', inject([GoogleStaticMapService], (service: GoogleStaticMapService) => {
    expect(service).toBeTruthy();
  }));
});
