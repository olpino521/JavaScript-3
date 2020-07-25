/* Copyright (C) 2020 Alejandro Lopez, All Rights Reserved */
'user strict';

import { TEAM } from "./Team";

export const ROLE = {
    UNKWOWN: -1,
    CAPTAIN: 0,
    FIRST_OFFICER: 1,
    ENGINEER: 2,
    NAVIGATOR: 3,
    ROLE_NAME: ["Unknown", "Captain", "First Officer", "Engineer", "Navigator"]
}

export default class Player{

    constructor( name, role = ROLE.UNKWOWN, teamId = TEAM.A ) {
        this.name = name;
        this.role = role;
        this.teamId = teamId;
    }

    serialize(){
        return JSON.stringify({
            name: this.name,
            role: this.role,
            team: this.teamId
        })
    }

    deserialize( JSONString){

    }
}