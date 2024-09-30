<template>
    <div class="absolute top-0 left-0 w-full h-14 shadow-sm shadow-gray-300 bg-gray-200 flex justify-between items-center px-4">
        <div class="">
            <h2 class="font-din-regular text-2xl icons8-shutdown-64.png uppercase">Hello Savannah</h2>
        </div>
        <div class="">
            <button @click="logout"><img class="w-7" src="../../assets/images/icons8-shutdown-64.png" alt="logout"></button>
        </div>
    </div>
</template>

<script>
    import { useAuthStore } from '@/stores/AuthStore';
    import router from '@/router/routes';
    export default {
        data() {
            const AuthStore = useAuthStore()
            return {
                AuthStore: AuthStore
            }
        },
        methods: {
            async logout() {
                await this.AuthStore.signout()
                this.AuthStore.user = null
                this.AuthStore.isLogged = false
                router.push('/login')
            }
        }
    }
</script>