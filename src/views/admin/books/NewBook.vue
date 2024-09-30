<template>
    <div class="w-full font-din">
      <!-- Hidden Top Bar -->
      <div class="hidden-top-bar w-full h-14"></div>
      <!-- Hidden Top Bar -->
  
      <!-- Heading -->
      <div class="p-4">
        <div class="w-full flex justify-between items-center px-6 py-2 bg-gray-200 shadow-sm shadow-gray-300">
          <h1 class="font-din-regular text-xl">New Book</h1>
        </div>
      </div>
      <!-- Heading -->
    
      <!-- Body -->
      <div class="px-4">
        <form @submit.prevent="addNewBook" novalidate>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="name">Name</label>
                <input v-model="name" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="name" type="text" placeholder="Wing of Fire">
            </div>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="author">Author</label>
                <input v-model="author" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="author" type="text" placeholder="A. P. J. Abdul Kalam">
            </div>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="cPhoto">Cover Photo</label>
                <input v-model="cover_photo" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="cPhoto" type="text" placeholder="example.com/image.png">
            </div>
            <div class="flex mb-4">
                <label class="w-36 pt-2 text-xl font-din" for="link">Book Link</label>
                <input v-model="link" class="border focus-visible:outline-none w-full h-10 rounded px-2" id="link" type="text" placeholder="example.com/book-name">
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
              <input type="submit" value="ADD NEW BOOK" class="w-full p-2 bg-black font-din-regular text-lg text-white rounded">
            </div>
        </form>
      </div>
      <!-- Body -->
    </div>
</template>
    
<script>
    import { useBookStore } from '@/stores/BookStore';
    import { push } from 'notivue';

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
                is_featured: false
            }
        },
        components: {
        
        },
        methods: {
            addNewBook() {
                try {
                    if(!this.cover_photo) throw 'Cover photo link is required!'
                    if(!this.link) throw 'Book link is required!'
                    this.BookStore.addBook(this.name, this.author, this.cover_photo, this.link, this.order_no, this.is_featured)
                } catch (error) {
                    push.warning({
                        title: 'Error',
                        message: `${error}`
                    })
                }
            }
        },
        mounted(){
        }
    }
</script>
    