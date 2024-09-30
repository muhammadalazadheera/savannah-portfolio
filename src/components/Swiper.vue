<template>
  <div class="slider mt-8">
    <swiper
      :slidesPerView="1.3"
      :breakpoints="{640 : {slidesPerView: 3.3} }"
      :spaceBetween="10"
      :freeMode="true"
      :pagination="false"
      :navigation="{ clickable: true}"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="book in BookStore.featured_book">
        <a target="_blank" href="{{ book.link }}">
          <div class="book-img">
            <img class="hover:scale-110 duration-500" :src="book.cover_photo" alt="">
          </div>
          <div class="text-center font-din">
            <h2 class="font-din-medium text-xl mt-3 text-black capitalize">{{ book.name }}</h2>
            <p class="font-din">{{ book.author }}</p>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/free-mode';
    import 'swiper/css/navigation';
  
  
    // import required modules
    import { FreeMode, Navigation } from 'swiper/modules';
    import { useBookStore } from '@/stores/BookStore';
  
    export default {
      data() {
        const BookStore = useBookStore()
        return {
          BookStore
        }
      },
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [FreeMode, Navigation],
        };
      },
      methods:{
        async getFeaturedBook() {
          await this.BookStore.featuredBook()
        }
      },
      mounted() {
        this.getFeaturedBook()
      }
    };
  </script>

<style>
.slider {
  width: 100%;
  height: auto;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.book-img{
  width: 100%;
  height: 380px;
  overflow: hidden;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 380px;
  object-fit:fill;
}
</style>
  