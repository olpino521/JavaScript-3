<!--
Copyright (c) 2020. Pedro Avelino & Alejandro Lopez. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <div class="buttons">
            <form class="gamepad">
                <button class="dir-button" v-on:click='move("NORTH")'>NORTH</button>
                <button class="dir-button" v-on:click='move("SOUTH")'>SOUTH</button>
                <button class="dir-button" v-on:click='move("WEST")'>WEST</button>
                <button class="dir-button" v-on:click='move("EAST")'>EAST</button>
            </form>
        </div>
        
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    class ButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                direction: "",
                axisX: ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
            }
            this.props = { 
            }

            this.injectActions(['setPosition', 'addDirection']);
            this.injectGetters(['captainPosition']);
        }

        move( headingTo )
        {
            this.direction = headingTo;

            let pos = [0,0];
            let ref = this.captainPosition;

            pos[0] += ref[0];
            pos[1] += ref[1];

            switch(headingTo)
            {
                case "NORTH":
                    pos[1]--; 
                    break;
                
                case "SOUTH":
                    pos[1]++;
                    break;

                case "WEST":
                    pos[0]--;
                    break;

                case "EAST":
                    pos[0]++;
                    break;
            }



            if(pos[0] > 0 && pos[0] < 16  && pos[1] > 0 && pos[1] < 16 && document.getElementById(this.axisX[pos[0]]+pos[1]).classList.contains('go'))
            {
                this.printDot(ref, pos);
                this.setPosition(pos);
                this.addDirection(headingTo);
            }
        }

        printDot( from, to) { // hide the last ship position dot and print in the new one
            let cId = this.axisX[from[0]]+from[1];
            let element = document.getElementById(cId);
            element.classList.remove("dot");

            let cId2 = this.axisX[to[0]]+to[1];
            let element2 = document.getElementById(cId2);
            element2.classList.add("dot");
        }
    }

    export default new ButtonController('lsButton');

</script>
<style scoped>
    .component-style {
        display: flex;
        flex-direction: column;
        height: 8vh;
        width: 100%;
        align-self: center;
    }

    .dir-button{
        margin-left: 10px;
        padding: 0.9em;
        min-width:15vw ;
    }

    .clear{
        float: left;
    }

</style>