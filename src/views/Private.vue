<template>
    <div>
        <h1 class="font-bold text-blue-600 text-5xl mb-4 text-center">This is a private page</h1>
        <button class="p-3 px-4 font-bold text-white rounded-lg bg-green-400" @click="logout">Logout</button>
    </div>
</template>

<script>
import firebase from 'firebase'

    export default {
        name: 'Private',
        methods: {
            logout(){
                firebase.auth().signOut().then(
                    () => {
                        this.$router.replace('/')
                    }
                )
            }
        }
    }
</script>