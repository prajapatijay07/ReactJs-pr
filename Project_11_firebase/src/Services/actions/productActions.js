// import axios from "axios";
// import {
//   PRODUCT_LIST_REQUEST,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_LIST_FAIL,
//   PRODUCT_DETAILS_REQUEST,
//   PRODUCT_DETAILS_SUCCESS,
//   PRODUCT_DETAILS_FAIL,
//   PRODUCT_CREATE_REQUEST,
//   PRODUCT_CREATE_SUCCESS,
//   PRODUCT_CREATE_FAIL,
//   PRODUCT_UPDATE_REQUEST,
//   PRODUCT_UPDATE_SUCCESS,
//   PRODUCT_UPDATE_FAIL,
//   PRODUCT_DELETE_REQUEST,
//   PRODUCT_DELETE_SUCCESS,
//   PRODUCT_DELETE_FAIL,
//   SET_SEARCH_QUERY,
//   SET_CATEGORY_FILTER,
//   SET_PRICE_FILTER,
//   SET_RATING_FILTER,
//   CLEAR_FILTERS,
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   UPDATE_CART_QUANTITY,
//   CLEAR_CART,
//   ADD_TO_WISHLIST,
//   REMOVE_FROM_WISHLIST
// } from "./actionTypes";

// export const getProductsAsync = () => async (dispatch) => {
//   dispatch({ type: PRODUCT_LIST_REQUEST });
//   try {
//     const res = await axios.get("http://localhost:8000/products");
//     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//   }
// };

// export const getProductDetailsAsync = (id) => async (dispatch) => {
//   dispatch({ type: PRODUCT_DETAILS_REQUEST });
//   try {
//     const res = await axios.get(`http://localhost:8000/products/${id}`);
//     dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
//   }
// };

// export const createProductAsync = (data) => async (dispatch) => {
//   dispatch({ type: PRODUCT_CREATE_REQUEST });
//   try {
//     const res = await axios.post("http://localhost:8000/products", data);
//     dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_CREATE_FAIL, payload: error.message });
//   }
// };

// export const updateProductAsync = (id, data) => async (dispatch) => {
//   dispatch({ type: PRODUCT_UPDATE_REQUEST });
//   try {
//     const res = await axios.put(`http://localhost:8000/products/${id}`, data);
//     dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.message });
//   }
// };

// export const deleteProductAsync = (id) => async (dispatch) => {
//   dispatch({ type: PRODUCT_DELETE_REQUEST });
//   try {
//     await axios.delete(`http://localhost:8000/products/${id}`);
//     dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: id });
//   } catch (error) {
//     dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
//   }
// };

// export const setSearchQuery = (query) => ({
//   type: SET_SEARCH_QUERY,
//   payload: query
// });

// export const setCategoryFilter = (category) => ({
//   type: SET_CATEGORY_FILTER,
//   payload: category
// });

// export const setPriceFilter = (priceRange) => ({
//   type: SET_PRICE_FILTER,
//   payload: priceRange
// });

// export const setRatingFilter = (rating) => ({
//   type: SET_RATING_FILTER,
//   payload: rating
// });

// export const clearFilters = () => ({
//   type: CLEAR_FILTERS
// });

// export const addToCartAsync = (product, qty = 1) => (dispatch, getState) => {
//   dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: qty } });
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// export const removeFromCartAsync = (id) => (dispatch, getState) => {
//   dispatch({ type: REMOVE_FROM_CART, payload: id });
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// export const updateCartQuantityAsync = (id, qty) => (dispatch, getState) => {
//   dispatch({ type: UPDATE_CART_QUANTITY, payload: { productId: id, quantity: qty } });
//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// export const clearCartAsync = () => (dispatch) => {
//   dispatch({ type: CLEAR_CART });
//   localStorage.removeItem("cartItems");
// };

// export const addToWishlistAsync = (product) => (dispatch, getState) => {
//   dispatch({ type: ADD_TO_WISHLIST, payload: product });
//   localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
// };

// export const removeFromWishlistAsync = (id) => (dispatch, getState) => {
//   dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
//   localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
// };

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  SET_SEARCH_QUERY,
  SET_CATEGORY_FILTER,
  SET_PRICE_FILTER,
  SET_RATING_FILTER,
  CLEAR_FILTERS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./actionTypes";

// =============================================================
// 🔹 FIRESTORE CRUD OPERATIONS
// =============================================================

// 🟩 Get All Products
export const getProductsAsync = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const res = await getDocs(collection(db, "products"));
    const products = res.docs.map((d) => ({ id: d.id, ...d.data() }));
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

// 🟩 Get Single Product
export const getProductDetailsAsync = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });
  try {
    const res = await getDoc(doc(db, "products", id));
    if (res.exists()) {
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: { id: res.id, ...res.data() },
      });
    } else {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: "Product not found",
      });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

// 🟩 Create Product
export const createProductAsync = (data) => async (dispatch) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  try {
    const productRef = doc(collection(db, "products"));
    await setDoc(productRef, data);
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: { id: productRef.id, ...data },
    });
  } catch (error) {
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: error.message });
  }
};

// 🟩 Update Product
export const updateProductAsync = (id, data) => async (dispatch) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST });
  try {
    await updateDoc(doc(db, "products", id), data);
    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: { id, ...data },
    });
  } catch (error) {
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.message });
  }
};

// 🟩 Delete Product
export const deleteProductAsync = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST });
  try {
    await deleteDoc(doc(db, "products", id));
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};

// =============================================================
// 🔹 FILTERS
// =============================================================
export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  payload: category,
});

export const setPriceFilter = (priceRange) => ({
  type: SET_PRICE_FILTER,
  payload: priceRange,
});

export const setRatingFilter = (rating) => ({
  type: SET_RATING_FILTER,
  payload: rating,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

// =============================================================
// 🔹 CART
// =============================================================
export const addToCartAsync = (product, qty = 1) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: qty } });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCartAsync = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const updateCartQuantityAsync = (id, qty) => (dispatch, getState) => {
  dispatch({ type: UPDATE_CART_QUANTITY, payload: { productId: id, quantity: qty } });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const clearCartAsync = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
  localStorage.removeItem("cartItems");
};

// =============================================================
// 🔹 WISHLIST
// =============================================================
export const addToWishlistAsync = (product) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_WISHLIST, payload: product });
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlistItems)
  );
};

export const removeFromWishlistAsync = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlistItems)
  );
};

