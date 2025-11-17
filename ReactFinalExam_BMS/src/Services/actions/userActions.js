import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";

// Action Creators
const signUpSuccess = () => ({
  type: "SIGN_UP",
});

const signInSuccess = (user) => ({
  type: "SIGN_IN",
  payload: user,
});

const signOutSuccess = () => ({
  type: "SIGN_OUT",
});

const errorMessage = (msg) => ({
  type: "ERROR",
  payload: msg,
});

// Async: Sign Up
export const signUpAsync = (data) => {
  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("Sign Up Success:", userCredential.user);
      dispatch(signUpSuccess());
    } catch (err) {
      console.log("Sign Up Error:", err.message);
      dispatch(errorMessage(err.message));
    }
  };
};

// Async: Sign In with Email
export const signInAsync = (data) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(signInSuccess(user));
    } catch (err) {
      console.log("Sign In Error:", err.message);
      dispatch(errorMessage(err.message));
    }
  };
};

// Async: Sign In with Google
export const signInWithGoogleAsync = () => {
  return async (dispatch) => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Google Sign In:", user);
      dispatch(signInSuccess(user));
    } catch (err) {
      console.log("Google Sign In Error:", err.message);
      dispatch(errorMessage(err.message));
    }
  };
};

// Async: Sign Out
export const logOutAsync = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      dispatch(signOutSuccess());
    } catch (err) {
      console.log("Logout Error:", err.message);
      dispatch(errorMessage(err.message));
    }
  };
};
