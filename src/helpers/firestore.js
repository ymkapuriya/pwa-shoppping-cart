import "firebase-admin"
import config from "../../config/google-firestore-config"

import {Firestore} from "@google-cloud/firestore/"


function initializeAppSA() {
    // [START initialize_app_service_account]
    admin.initializeApp({
        credential: admin.credential.cert(config)
    });
    var db = admin.firestore();
    // [END initialize_app_service_account]
    return db;
}
export const db = initializeAppSA()

function initializeApp() {
    // Instantiates a client. If you don't specify credentials when constructing
    // the client, the client library will look for credentials in the
    // environment.
    const firestore = new Firestore();

    const document = firestore.doc('posts/intro-to-firestore');
    console.log('Document created');

    // Enter new data into the document.
    document.set({
        title: 'Welcome to Firestore',
        body: 'Hello World',
    });
    console.log('Entered new data into the document');
}
