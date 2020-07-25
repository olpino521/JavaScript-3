/* Copyright (C) 2020 Alejandro Lopez, All Rights Reserved */
'user strict';

import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

export default class Connection {

    constructor() {

        let config = {
            apiKey: "AIzaSyBIqyeDbaP5SeAxhqI6Wt7jHrm2Z2glz5w",
            authDomain: "ltsonar-33e3d.firebaseapp.com",
            databaseURL: "https://ltsonar-33e3d.firebaseio.com",
            projectId: "ltsonar-33e3d",
            storageBucket: "ltsonar-33e3d.appspot.com",
            messagingSenderId: "142847879983",
            appId: "1:142847879983:web:7b687229f3bc254aec0fda",
            measurementId: "G-S7TP0P45XC"

        };

        firebase.initializeApp(config);

        this.dataStore = firebase.firestore();
    }

    get(collectionType, data){

        return new Promise( async (resolve, reject) => {
            let collection = this.dataStore.data.collection(collectionType);
            let query = collection.where("name", "==", data.name);
            let docRef = query.get().catch(error => reject(error));
            resolve(docRef);
        });
    }

    post(collectionType, data){

        return new Promise( async (resolve, reject) => {
            let collection = this.dataStore.data.collection(collectionType);
            const docRef = await collection.doc('game1').set(data).catch(error => reject(error));
            resolve(docRef);
        });
    }
}