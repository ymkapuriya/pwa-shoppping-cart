/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

import { getLocalProducts, getServerProducts, bindRealtimeProducts } from "./apis/products"

export const getAllProducts = () => (dispatch) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // succesfully got the data back)

  /*
  //get products from local
  _getLocalProducts()
    .then((products) => {
      dispatch({
        type: GET_PRODUCTS,
        products
      });
    })


  //get products from node server
  _getServerProducts()
    .then((products) => {
      dispatch({
        type: GET_PRODUCTS,
        products
      });
    })
    .catch((error) => {
      console.log(error)
    })
  */

  /**
   * Can not implement promise for snapshot function
   */
  //bind with realtime products
  bindRealtimeProducts(dispatch, GET_PRODUCTS)
};

export const checkout = () => (dispatch) => {
  // Here you could do things like credit card validation, etc.
  // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
  // by flipping a coin :)
  const flip = Math.floor(Math.random() * 2);
  if (flip === 0) {
    dispatch({
      type: CHECKOUT_FAILURE
    });
  } else {
    dispatch({
      type: CHECKOUT_SUCCESS
    });
  }
};

export const addToCart = (productId) => (dispatch, getState) => {
  const state = getState();
  // Just because the UI thinks you can add this to the cart
  // doesn't mean it's in the stock (user could've fixed it);
  if (state.shop.products[productId].stock > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
};

export const addToCartUnsafe = (productId) => {
  return {
    type: ADD_TO_CART,
    productId
  };
};