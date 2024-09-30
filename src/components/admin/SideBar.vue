<template>
    <div class="w-1/5 h-screen fixed top-0 left-0 bg-gray-200 border-r border-gray-400">
        <div class="h-14 shadow-sm shadow-gray-300 py-3 bg-white">
            <RouterLink class="font-ivy text-center block text-xl" to="/">Savannah Mandel</RouterLink>
        </div>
        <div class="mt-1">
            <nav>
                <ul>
                    <li class="py-1 px-6 mb-1 bg-white"><RouterLink class="font-din text-lg" to="/admin/blogs"><img class="inline w-4" src="../../assets/images/icons8-blog-48.png" alt=""> Blogs</RouterLink></li>
                    <li class="py-1 px-6 mb-1 bg-white"><RouterLink class="font-din text-lg" to="/admin/books"><img class="inline w-4" src="../../assets/images/icons8-books-48.png" alt=""> Books</RouterLink></li>
                </ul>
             </nav>
        </div>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';
    export default {
        
    }
</script>