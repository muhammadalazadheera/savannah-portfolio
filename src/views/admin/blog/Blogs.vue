<template>
    <div class="w-full font-din">
        <div class="w-full h-14"></div>

        <div class="p-4">
            <div class="w-full flex justify-between items-center px-6 py-2 bg-gray-200 shadow-sm shadow-gray-300">
                <h1 class="font-din-regular text-xl">Blogs</h1>
                <RouterLink class="font-din-regular text-green-600 text-lg" to="create-new-blog">+ New Blog</RouterLink>
            </div>
        </div>

        <div class="px-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 shadow-sm shadow-gray-300">
                <thead class="text-md text-white uppercase bg-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Published
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody class="text-base text-black">
                    <tr v-for="blog in FireStore.blogs" class="bg-gray-200 border-b border-gray-300">
                        <th scope="row" width="60%" class="px-6 py-2 font-medium text-black-900 whitespace-nowrap">
                            {{ blog.title }}
                        </th>
                        <td class="px-6 py-2">
                            {{ moment(blog.created_at).fromNow() }}
                        </td>
                        <td class="px-6 py-2 text-right">
                            <RouterLink :to="{ name:'SingleBlog', params:{ id: blog.id } }" target="_blank" class="font-medium text-green-600 mr-2 hover:underline">View</RouterLink>
                            <RouterLink :to="{name: 'EditBlog', params:{ id: blog.id }}" class="font-medium text-blue-600 mr-2 hover:underline">Edit</RouterLink>
                            <a @click="FireStore.deleteBlog(blog.id)" class="cursor-pointer font-medium text-red-600 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { useFirestore } from '@/stores/FireStore';
    import moment from 'moment';
    import { RouterLink } from 'vue-router';
    export default {
        data() {
            const FireStore = useFirestore()
            return {
                FireStore,
                moment
            }
        },
        methods: {
            async getBlogs() {
                await this.FireStore.getBlogs();
            },
        },
        mounted() {
            this.getBlogs()
        }
    }
</script>