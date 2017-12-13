import { configs } from './configs';

describe('Config', () => {

  it('compare baseuri', () => {

    const baseApiTest = 'http://localhost:3000/v1';
    expect(configs.baseUri).toEqual(baseApiTest);
  });
});
