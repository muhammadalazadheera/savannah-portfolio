<template>
    <div>
        <div class="w-full flex justify-center">
            <div class="title font-din-medium w-3/5 text-center border py-2 my-5 text-xl"><p class="uppercase">Library</p></div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 my-8 p-4 lg:p-0">
            <div v-for="book in BookStore.featured_book" class="overflow-hidden">
                <a :href="book.link" target="_blank"><img class="h-full hover:scale-110 duration-500" :src="book.cover_photo" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
    import { useBookStore } from '@/stores/BookStore';

    export default {
        data() {
            const BookStore = useBookStore()
            return {
                BookStore
            }
        },
        methods: {
            async getBooksInOrder() {
                await this.BookStore.getBooksInOrder()
            }
        },
        mounted() {
            this.getBooksInOrder()
        }
    }
</script>