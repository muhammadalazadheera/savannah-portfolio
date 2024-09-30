<template>
    <div v-if="!AuthStore.isLogged" class="preloader fixed top-0 left-0 w-screen h-screen bg-black flex justify-center items-center z-40">
        <h1 class="font-din-medium text-3xl text-white">Loading..</h1>
    </div>
</template>

<script>
    import { useAuthStore } from '@/stores/AuthStore';
    import { onAuthStateChanged } from 'firebase/auth';
    import { auth } from '@/firebase/config';
    export default {
        data(){
            const AuthStore = useAuthStore();
            return {
                AuthStore: AuthStore,
            }
        },
        mounted() {
            const unsub = onAuthStateChanged(auth, (user) => {
                this.AuthStore.user = user
                this.AuthStore.isLogged = true
                unsub()
            })
        },        
        mounted() {
            const unsub = onAuthStateChanged(auth, (user) => {
                this.AuthStore.user = user
                this.AuthStore.isLogged = true
                unsub()
            })
        }
    }
</script>