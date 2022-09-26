import { checkingAuthentication } from '../../../src/store/auth/thunks';

jest.mock('../../../src/firebase/provides');

describe('Tests on auth thunks', () => {
  test('Should start checkingAuthentication', () => {
    checkingAuthentication();
  });
});
