import firebase from '@firebase/app';
import '@firebase/firestore'

export const initFirestore = function () {
    const config = {
        apiKey: "AIzaSyCYmzCL3B0xVklb_i3kWrg-lqZ8Ln2S80U",
        authDomain: "fastify-starter-app.firebaseapp.com",
        databaseURL: "https://fastify-starter-app.firebaseio.com",
        projectId: "fastify-starter-app",
        storageBucket: "fastify-starter-app.appspot.com",
        messagingSenderId: "1091915600015"
    };
    firebase.initializeApp(config);
    const firestore = firebase.firestore()
    return firestore
}

export const testFirestore = function (firestore, doc) {
    let key = Math.random().toString(36).substring(7);
    const document = firestore.doc('posts/' + key);
    console.log('Document created');
    // Enter new data into the document.
    if (!doc) {
        doc = {
            title: 'Welcome to Firestore',
            body: 'Hello World',
        }
    }
    document.set(doc);
}
