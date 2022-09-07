import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;

    const { uid, displayName, email, photoURL } = user;

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    const { code, message } = error;

    return { ok: false, code, message };
  }
};

export const registerUserWithEmailAndPassword = async ({ displayName, email, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const user = response.user;

    // Update user displayName on firebase
    await updateProfile(firebaseAuth.currentUser, { displayName });

    const { uid, photoURL } = user;

    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL,
    };
    //
  } catch (error) {
    console.log({ error });
    let { code, message } = error;

    if (code === 'auth/email-already-in-use') message = 'Email is already in use !';

    return { ok: false, code, message };
  }
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(firebaseAuth, email, password);

    const { uid, displayName, photoURL } = response.user;

    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL,
    };
  } catch (error) {
    // console.log({ error });
    let { code, message } = error;

    if (code === 'auth/wrong-password') {
      message = 'Incorrect password !';
    } else if (code === 'auth/user-not-found') {
      message = 'User does not exist !';
    }

    return { ok: false, code, message };
  }
};
