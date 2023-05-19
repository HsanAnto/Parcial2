/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartidoServiceService } from './partido-service.service';

describe('Service: PartidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidoServiceService]
    });
  });

  it('should ...', inject([PartidoServiceService], (service: PartidoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
