<template>
    <div class="w-full font-din">
      <!-- Hidden Top Bar -->
      <div class="hidden-top-bar w-full h-14"></div>
      <!-- Hidden Top Bar -->
  
      <!-- Heading -->
      <div class="p-4">
        <div class="w-full flex justify-between items-center px-6 py-2 bg-gray-200 shadow-sm shadow-gray-300">
          <h1 class="font-din-regular text-xl">Edit Book</h1>
        </div>
      </div>
      <!-- Heading -->
    
      <!-- Body -->
      <div class="px-4">
        <form @submit.prevent="editBook" novalidate>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="name">Name</label>
                <input v-model="name" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="name" type="text">
            </div>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="author">Author</label>
                <input v-model="author" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="author" type="text">
            </div>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="title">Cover Photo</label>
                <input v-model="cover_photo" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="title" type="text">
            </div>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="title">Book Link</label>
                <input v-model="link" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="title" type="text">
            </div>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="order_no">Order</label>
                <input v-model="order_no" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="order_no" type="number">
            </div>
            <div class="flex mb-4">
                <label class="w-32 pt-2 text-xl font-din" for="is_featured">Featured</label>
                <input v-model="is_featured" class="w-5 h-5" id="is_featured" type="checkbox">
            </div>
            <div class="flex">
              <div class="w-36 pt-2"></div>
              <input type="submit" value="EDIT BOOK" class="w-full p-2 bg-black font-din-regular text-lg text-white rounded">
            </div>
        </form>
      </div>
      <!-- Body -->
    </div>
</template>

<script>
    import { useBookStore } from '@/stores/BookStore';

    export default {
        data() {
            const BookStore = useBookStore()
            return {
                BookStore,
                name: '',
                author: '',
                cover_photo: '',
                link: '',
                order_no: '',
                is_featured: ''
            }
        },
        methods: {
            async getBook() {
                await this.BookStore.getBook(this.$route.params.id)
                    this.name = this.BookStore.book.name
                    this.author = this.BookStore.book.author
                    this.cover_photo = this.BookStore.book.cover_photo
                    this.link = this.BookStore.book.link
                    this.order_no = this.BookStore.book.order_no
                    this.is_featured = this.BookStore.book.is_featured
            },
            editBook() {
                this.BookStore.updateBook(this.$route.params.id, this.name, this.author, this.cover_photo, this.link, this.order_no, this.is_featured)
            }
        },
        mounted() {
            this.getBook()
        }
    }
</script>