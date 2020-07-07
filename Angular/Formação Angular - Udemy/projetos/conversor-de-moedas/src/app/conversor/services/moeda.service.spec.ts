import { TestBed } from '@angular/core/testing';

import { MoedaService } from './moeda.service';

describe('MoedaService', () => {
  let service: MoedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedaService);
  });

});
