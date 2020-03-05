import { TestBed } from '@angular/core/testing';

import { TiposdocumentosService } from './tiposdocumentos.service';

describe('TiposdocumentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposdocumentosService = TestBed.get(TiposdocumentosService);
    expect(service).toBeTruthy();
  });
});
