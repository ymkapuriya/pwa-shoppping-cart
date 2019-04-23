
import { initFirestore, testFirestore } from "../../../helpers/firestore"

/**
 * Get local products
 */
export const getLocalProducts = function () {
  const PRODUCT_LIST = [
    { "id": "P1", "category": "Category 1", "title": "Product 1", "price": 10.99, "stock": 2, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg' },
    { "id": "P2", "category": "Category 2", "title": "Product 2", "price": 29.99, "stock": 10, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg' },
    { "id": "P3", "category": "Category 1", "title": "Product 3", "price": 8.99, "stock": 5, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg' },
    { "id": "P4", "category": "Category 2", "title": "Product 4", "price": 24.99, "stock": 7, 'photo': 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/4.jpg' },
  ];
  return new Promise(function (resolve, reject) {
    // You could reformat the data in the right format as well:
    try {
      const products = PRODUCT_LIST.reduce((obj, product) => {
        obj[product.id] = product
        return obj
      }, {});
      resolve(products)
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Get server products
 */
export const getServerProducts = function () {
  const options = {
    method: "GET",
    mode: "cors"
  }

  return fetch('http://127.0.0.1:3000/products', options)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      let serverProducts = json.products
      // You could reformat the data in the right format as well:
      const products = serverProducts.reduce((obj, product) => {
        obj[product.id] = product
        return obj
      }, {});
      return products
    })
    .catch(function (error) {
      console.log(error)
      throw "Error " + error
    })
}

/**
 * Bind with cloud firestore to get realtime products
 * @param {function} dispatch 
 * @param {string} action
 */
export const bindRealtimeProducts = function (dispatch, action) {
  let db = initFirestore()
  var query = db.collection('products')
  //testFirestore(db, { title: 'Test', comment: 'Commnet' })

  var observer = query.onSnapshot(querySnapshot => {
    console.log(`Received query snapshot of size ${querySnapshot.size}`);
    let docs = querySnapshot.docs;
    let liveProducts = []
    for (let doc of docs) {
      //console.log(`Document found at path: ${doc.ref.path}`);
      //console.log(`Document data: ${doc.data()}`);
      let product = doc.data()
      product.id = doc.id
      liveProducts.push(product)
    }
    //console.log(liveProducts)
    const products = liveProducts.reduce((obj, product) => {
      obj[product.id] = product
      return obj
    }, {});

    //dispatch action
    dispatch({
      type: action,
      products
    });

  }, err => {
    console.log(`Encountered error: ${err}`);
  });
}