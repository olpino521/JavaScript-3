// Copyright (C) 2020 Omar Pino. All Rights Reserved
'use strict';

import Team from './Team'
import {TEAM} from './Team'
import Submarine from './Submarine';

export default class Game{
    constructor(){

        this.gameState ={
            phase: PHASE.LOBBY,
            currentTeam: TEAM.A,
            playerCount: 0,
            teamList: [],
        }

        this.submarineList = [
            new Submarine(TEAM.A),
            new Submarine(TEAM.B),
        ]

        this.teamList = [
            new Team(TEAM.A, this.submarineList[TEAM.A]),
            new Team(TEAM.B, this.submarineList[TEAM.B]),
        ]
    }
}

const PHASE = {
    LOBBY : 0,
    CAPTAIN_PLACEMENT_TURN : 1,
    CAPTAIN_DIRECTION_TURN : 2,
    FIRST_OFFICER_TURN : 3,
    ENGINEER_TURN : 4,
    NAVIGATOR_TURN : 5,
}