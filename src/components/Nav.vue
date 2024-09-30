<template>
    <div class="sticky top-0 z-10 py-4 bg-white w-full text-center">
        <RouterLink to="/" class="text-red text-center font-ivy text-5xl text-black">Savannah Mandel</RouterLink>
        <nav class="text-center mt-3">
            <ul class="list-none font-din [&>*]:inline [&>*]:mr-5 uppercase">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/bio">BIO</RouterLink></li>
                <li><RouterLink to="/blog">Blog</RouterLink></li>
                <li><RouterLink to="/library">Library</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        
    }
</script>