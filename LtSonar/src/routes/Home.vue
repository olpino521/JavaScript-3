<!--
VFS VUE Single File Component

<pg-home user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class="home">
            <div>Welcome to your {{ name }}</div>
            <div class="dialog">

                <form class="sample-form" @submit.prevent="login(loginData)">
                    <label>Nickname: <input name="nick" v-model="loginData.nickname" placeholder="playerName"></label><br/>
                    <label>Role: 
                        <select name="myrole" v-model="loginData.currentrole" placeholder="playerRole">
                            <option value="Captain">Captain</option>
                            <option value="firstofficer">First Officer</option>
                            <option value="Navigator">Navigator</option>
                            <option value="Engineer">Engineer</option>
                        </select>
                        </label><br/>

                    <input type="submit" value="Submit" >
                </form>

            </div>
        </div>
    </section>

</template>
<script>

    import Controller from '@/../lib/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                formData: {
                    sampleOne:"",
                    sampleTwo:42,
                },

                loginData:{
                    nickname: "",
                    currentrole: "",
                }
            };

            this.props = {
               name: String,
            };

            this.injectActions(['setName', 'setRole']);
            this.injectGetters(['playerName', 'playerRole']);
        }

        login(loginData){
            let playerName = {
                name: loginData.nickname
            }
            this.setName( playerName );
            this.setRole( loginData.currentrole );

            this.$router.push("/" + loginData.currentrole);
        }
    }

    export default new HomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 100%;
    }

    .home {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }
</style>
