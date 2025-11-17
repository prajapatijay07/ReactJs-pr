import {
  collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc,
} from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

export const loading = () => ({ type: "LOADING" });
export const errorMessage = (err) => ({ type: "ERROR", payload: err });
export const getAllMovies = (data) => ({ type: "GET_ALL_MOVIE", payload: data });
export const addMovie = (data) => ({ type: "ADD_MOVIE", payload: data });
export const deleteMovie = (id) => ({ type: "DELETE_MOVIE", payload: id });
export const getSingleMovie = (data) => ({ type: "GET_SINGLE_MOVIE", payload: data });
export const updateMovie = (data) => ({ type: "UPDATE_MOVIE", payload: data });
export const resetCreateFlag = () => ({ type: "RESET_CREATE_FLAG" });
export const resetUpdateFlag = () => ({ type: "RESET_UPDATE_FLAG" });

export const getAllMoviesAsync = () => async (dispatch) => {
  dispatch(loading());
  try {
    const snapshot = await getDocs(collection(db, "movies"));
    const result = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    dispatch(getAllMovies(result));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const addMovieAsync = (data) => async (dispatch, getState) => {
  dispatch(loading());
  const { user } = getState().userReducer;
  try {
    const movieWithUser = { ...data, createdBy: user.uid };
    await setDoc(doc(db, "movies", data.id), movieWithUser);
    dispatch(addMovie(movieWithUser));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const deleteMovieAsync = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    await deleteDoc(doc(db, "movies", id));
    dispatch(deleteMovie(id));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const getSingleMovieAsync = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await getDoc(doc(db, "movies", id));
    if (res.exists()) dispatch(getSingleMovie({ id: res.id, ...res.data() }));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const updateMovieAsync = (data) => async (dispatch) => {
  dispatch(loading());
  try {
    await updateDoc(doc(db, "movies", data.id), data);
    dispatch(updateMovie(data));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};
