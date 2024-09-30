<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <Preloader />
        <div class="w-full flex flex-col items-center justify-center">
            <div class="title font-din-medium w-2/5 text-center border py-2 my-5 text-xl"><p class="uppercase">Login</p></div>
            <form @submit.prevent="setUser" class="w-full sm:w-2/5 p-4 sm:p-0 font-din text-black text-lg my-5">
                <div class="mb-3">
                    <input v-model="email" class="block border w-full h-8 p-3 focus-visible:outline-none focus-visible:border-black" type="email" id="email" placeholder="Email">
                </div>
                <div class="mb-3">
                    <input autocomplete v-model="password" class="block border w-full h-8 p-3 focus-visible:outline-none focus-visible:border-black" type="password" placeholder="Password">
                </div>
                <button class="shadow-sm w-full h-12 border font-din-medium mr-4 bg-black text-white">Login</button>
            </form>
            <p class="capitalize text-xl font-din text-red-500" v-if="error">{{ error }}</p>
        </div>
    </div>
    <Toast />
</template>

<script>
    import { useAuthStore } from '@/stores/AuthStore';
    import { useRouter } from 'vue-router';
    import Preloader from '@/components/admin/Preloader.vue';
    import Toast from '@/components/admin/Toast.vue';
    import { push } from 'notivue';
    export default {
        data() {
            const AuthStore = useAuthStore();
            const router = useRouter()
            return {
                email: '',
                password: '',
                AuthStore,
                router,
                error: '',
            }
        },
        components: {
            Preloader,
            Toast
        },
        methods: {
            async setUser() {
                try {
                    if(!this.email || !this.password) throw 'Email And Password Fields Are Required!'
                    await this.AuthStore.signin(this.email, this.password)
                    this.router.push('admin/blogs')
                } catch (error) {
                    push.warning({
                        title:'Warning',
                        message: `${error}`
                    })
                }
            }
        }
    }
</script>