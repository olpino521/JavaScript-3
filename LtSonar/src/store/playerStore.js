/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Player from '@/model/player'
import { response } from 'express';

const ERROR_OK = 0;
const ERROR_NAME_IN_USE = 100;

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        player: new Player(),
        errorStatus: ERROR_NAME_IN_USE,
        errorMessage: "All OK",
        chatMessages: [],
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {

        setName({ commit }, name) {
            Axios.post('/api/player/login', name)
                .then(response => response.data)
                .then(data => (data.error ? error => { throw (error) } : data.payload))
                .then(responseData => {
                    console.log(responseData);
                    commit('SET_NAME', name);
                })
                .catch(error => {
                    console.log(error);
                    commit('SET_NAME_ERROR', ERROR_NAME_IN_USE);
                });
        },

        // clearError({commit}){ commit('SET_NAME_ERROR', ERROR_OK)},
        // addMessage({commit}, newMsg = ""){ commit('ADD_MSG', msg)},
        setRole({ commit }, role) {
            commit('SET_ROLE', role);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_NAME: (state, name) => { state.player.name = name },
        SET_NAME_ERROR: (state, name) => { state.player.name = name },
        SET_ROLE: (state, role) => { state.player.role = role },
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        playerName: state => state.player.name,
        playerRole: state => state.player.role,
    },
}
