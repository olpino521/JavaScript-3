// Copyright (C) 2020 Omar Pino. All Rights Reserved
'use strict';
const MAX_NUM_PLAYERS = 4;
export const TEAM = {
    UNKNOWN: -1,
    A : 0,
    B : 1,
    GLOBAL: 2,
    TEAM_NAME: ["Unknown", "Team A", "Team B", "Global"]
}

export default class Team
{
    constructor(teamNumber, submarine){
        this.teamNumber = teamNumber;
        this.submarine = submarine;
        this.numTeamPlayers = 0;
        this.players = []
    }

    get name() { return TEAM.TEAM_NAME[this.teamNumber + 1]}
}