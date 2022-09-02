import { signInWithGoogle } from '../../firebase/provides';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    console.log('Accion asincrona');
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    // console.log(result);

    if (!result.ok) return dispatch(logout(result.message));

    delete result.ok;
    dispatch(login(result));
  };
};
