import { registerUserWithEmailAndPassword, signInWithGoogle } from '../../../src/firebase/provides';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn, startRegisterUserWithEmailAndPassword } from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixtures';

// Mock of all Firebase providers, all exports from the file in the path
jest.mock('../../../src/firebase/provides');

describe('Tests on auth thunks', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should start checkingAuthentication', async () => {
    const returnedFunctionByThunk = await checkingAuthentication();
    returnedFunctionByThunk(dispatch);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(1);

    // These 3 forms do the same :
    expect(dispatch).toHaveBeenCalledWith(expect.any(Object));
    expect(dispatch).toHaveBeenCalledWith({ payload: undefined, type: 'auth/checkingCredentials' });
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('Should start successful GoogleSignIn, call checkingCredentials and login', async () => {
    const successfulResponse = { ok: true, ...demoUser };
    // Mocked function :
    await signInWithGoogle.mockResolvedValue(successfulResponse);

    // thunk
    // ()() execute the returned function, same as line 17-18
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(successfulResponse));
    expect(dispatch).toHaveBeenNthCalledWith(2, login(successfulResponse));
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('Should start GoogleSignIn and return error, call only logout with error message', async () => {
    const errorResponse = { ok: false, code: expect.any(String), message: 'Test error message' };
    // Mocked function :
    await signInWithGoogle.mockResolvedValue(errorResponse);

    // execute thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(errorResponse.message));
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('Should succesfully startRegisterUserWithEmailAndPassword', async () => {
    // Succesful mock response from Firebase
    const succesfulResponse = { ok: true, ...demoUser };
    await registerUserWithEmailAndPassword.mockResolvedValue(succesfulResponse);

    const demoRegisterUser = { displayName: expect.any(String), email: expect.any(String), password: expect.any(String) };
    const returnedDispatcherFunctionByThunk = await startRegisterUserWithEmailAndPassword(demoRegisterUser);
    // Execute returned function
    returnedDispatcherFunctionByThunk(dispatch);

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    // expect(dispatch).toHaveBeenCalledWith(login(succesfulResponse));
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
