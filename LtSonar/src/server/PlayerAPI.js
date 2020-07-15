// Copyright (C) 2020 Omar Pino. All Rights Reserved
'use strict';

import Express from 'express'
import Response from './Response.js'
import Player from '../model/player.js';

const Router = Express.Router();

Router.post('/login', (request, response) =>
{
    let resp = new Response();

    let value = request.body.name;

    let player = new Player();
    player.name = value
    //Push player to team

    resp.payload = player;
    resp.ok();

    response.send(resp.serialize());
});


Router.post('/leave', (request, response) =>
{
    let data = request.body // nick: , team: 
});

Router.post('/stats', (request, response) =>
{
    let data = request.body // nick: , team: 
});

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++Old code for reference from angry pigs+++++++++++++++++++++++++++++++++++++++++++++++
// Router.post('/save/:userid?', (request, response) => {
//     // handle edges from form
//     let res = new Response()
//     //console.log(JSON.parse( request.body.payload))
//     res.saveFile(JSON.parse( request.body.payload))
//         .then(result => {

//             // Lets get some data to the client
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         })
//         .catch(err => {
//             let result = {
//                 error: 2,
//                 payload: err
//             }
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         })
// });

// Router.post('/get_level_list/:userid?', (request, response) => {
//     let res = new Response()
//     res.fetchList('./server/data')
//         .then(list => {
//             let result =
//             {
//                 payload: list,
//                 error: 0
//             };

//             // Lets get some data to the client
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         }).catch(err => {
//             let result = {
//                 error: 1
//             }
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         })
// });

// Router.post('/get_object_list/:userid?', (request, response) => {
//     let res = new Response()
//     res.fetchList('./server/data/assets')
//         .then(list => {
//             let result =
//             {
//                 payload: list,
//                 error: 0
//             };

//             // Lets get some data to the client
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         }).catch(err => {
//             let result = {
//                 error: 1
//             }
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         })
// });

// Router.post('/load/:userid?', (request, response) => {
//     let res = new Response()
//     res.loadFile(request.body.name, request.body.type)
//         .then(list => {
//             let result = list

//             // Lets get some data to the client
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         }).catch(err => {
//             let result = {
//                 error: 3
//             }
//             let JSONString = JSON.stringify(result);
//             response.send(JSONString)
//         })
// });

export default Router