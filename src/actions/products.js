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

import {initFirestore, testFirestore} from "../helpers/firestore"

const PRODUCT_LIST = [
  { "id": "P1", "category": "Category 1", "title": "Product 1", "price": 10.99, "stock": 2, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg' },
  { "id": "P2", "category": "Category 2", "title": "Product 2", "price": 29.99, "stock": 10, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg' },
  { "id": "P3", "category": "Category 1", "title": "Product 3", "price": 8.99, "stock": 5, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg' },
  { "id": "P4", "category": "Category 2", "title": "Product 4", "price": 24.99, "stock": 7, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/4.jpg' },
  { "id": "P5", "category": "Category 1", "title": "Product 5", "price": 11.99, "stock": 3, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/5.jpg' },
];

export const getAllProducts = () => (dispatch) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // succesfully got the data back)

  const options = {
    method: "GET",
    mode: "cors"
  }

  let db = initFirestore()
  testFirestore(db, { title : 'Test', comment : 'Commnet'})

  fetch('http://127.0.0.1:3000/products', options)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      let serverProducts = json.products
      /*
      // You could reformat the data in the right format as well:
      const products = PRODUCT_LIST.reduce((obj, product) => {
        obj[product.id] = product
        return obj
      }, {});
      */

      // You could reformat the data in the right format as well:
      const products = serverProducts.reduce((obj, product) => {
        obj[product.id] = product
        return obj
      }, {});

      dispatch({
        type: GET_PRODUCTS,
        products
      });
    })
    .catch(function (error) {
      console.log(error)
    })
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