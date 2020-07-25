/* Copyright (C) 2020 Alejandro Lopez, All Rights Reserved */
'user strict';

import * as admin from 'firebase-admin'

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

        admin.initializeApp(config);

        this.dataStore = admin.firestore();
    }

    post(edge, data){

        let collecttionType = "players";

        return new Promise((resolve, reject) => {
            let collection = this.dataStore.data.collection(collecttionType);
            let query = collection.where("name", "==", data.name);
            query.get()
                .then( resultList => {
                    resultList.docs.forEach(element => {
                        
                    });
                })
                .catch(error => reject(error));
        });
    }
}