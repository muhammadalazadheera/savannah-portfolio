<template>
    <div class="w-full font-din">
        <div class="w-full h-14"></div>

        <div class="p-4">
            <div class="w-full flex justify-between items-center px-6 py-2 bg-gray-200 shadow-sm shadow-gray-300">
                <h1 class="font-din-regular text-xl">Books</h1>
                <RouterLink class="font-din-regular text-green-600 text-lg" to="create-new-book">+ New Book</RouterLink>
            </div>
        </div>

        <div class="px-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 shadow-sm shadow-gray-300">
                <thead class="text-md text-white uppercase bg-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Order
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cover
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Featured
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
                    <tr v-for="book in BookStore.books" class="bg-gray-200 border-b border-gray-300">
                        <td class="text-center">{{ book.order_no }}</td>
                        <td scope="row" width="45%" class="px-6 py-2 font-medium text-black-900 whitespace-nowrap">
                            <img :src="book.cover_photo" alt="cover image" width="15%">
                        </td>
                        <td class="px-6 py-2" width="15%">
                            {{ book.is_featured ? 'Featured' : 'Not Featured' }}
                        </td>
                        <td class="px-6 py-2">
                            {{ moment(book.created_at).fromNow() }}
                        </td>
                        <td class="px-6 py-2 text-right">
                            <RouterLink :to="{name:'EditBook', params:{id: book.id}}" class="font-medium text-blue-600 mr-2 hover:underline">Edit</RouterLink>
                            <a @click="deleteBook(book.id)" class="cursor-pointer font-medium text-red-600 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import { useBookStore } from '@/stores/BookStore';
    import moment from 'moment';
    export default {
        data() {
            const BookStore = useBookStore();
            return {
                BookStore,
                moment
            }
        },
        methods: {
            async getBooks() {
                this.BookStore.books = []
                await this.BookStore.getBooks()
                console.log(this.BookStore.books)
            },
            deleteBook(id) {
                this.BookStore.deleteBook(id)
            }
        },
        mounted() {
            this.getBooks()
        }
    }
</script>