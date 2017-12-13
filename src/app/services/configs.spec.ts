import { TestBed, inject } from '@angular/core/testing';

import { configs } from './configs';

describe('Config', () => {
  beforeEach(() => {
  });

  it('should be created', () => {

    const baseApiTest = 'http://localhost:3000/v1';

    expect(configs.baseUri).toEqual(baseApiTest);
  });
});
