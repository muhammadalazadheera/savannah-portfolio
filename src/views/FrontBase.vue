<template>
    <div class="container text-primary">
        <Nav />
        <RouterView />
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';
import { RouterView } from 'vue-router';

    export default {
        components: {
            Nav,
            Footer
        }
    }
</script>