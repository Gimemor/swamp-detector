/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeojsonService } from './geojson.service';

describe('Service: Geojson', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeojsonService]
    });
  });

  it('should ...', inject([GeojsonService], (service: GeojsonService) => {
    expect(service).toBeTruthy();
  }));
});
