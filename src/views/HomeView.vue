<template>
  <div>
    <Swiper />
    <div class="bio flex justify-center my-24">
      <div class="w-full sm:w-11/12 flex flex-col-reverse sm:flex-row justify-center p-4 sm:p-0">
        <div class="bio-text w-full sm:w-3/5 mt-4">
          <h2 class="font-din-regular text-3xl py-3">Author | Anthropologist</h2>
          <h3 class="text-xl font-din pb-3 capitalize">researching on the <i>history of human space exploration</i></h3>
          <p class="font-din text-justify sm:w-5/6">
            I am an anthropologist, author and PhD student whose research has primarily focused on the history of human space exploration and tech ethics. Recently, my debut non-fiction book, Ground Control: An Argument for the End of Human Space Exploration was released via Chicago Review Press.
          </p>
          <div class="details-button mt-5">
            <RouterLink to="/bio" class="inline-block text-center pt-3 w-full sm:w-44 h-12 border border-black font-din mb-2 sm:mb-0 sm:mr-4 hover:bg-black hover:text-white transition duration-300">Bio</RouterLink>
            <RouterLink to="/contact" class="inline-block text-center pt-3 w-full sm:w-44 h-12 border border-black font-din mb-2 sm:mb-0 sm:mr-4 hover:bg-black hover:text-white transition duration-300">Contact</RouterLink>
          </div>
        </div>
        <div class="bio-image w-full sm:w-2/5 flex justify-center">
          <img class="block w-full" src="../assets/images/savannah.png" alt="Savannah Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>  
import Swiper from '@/components/Swiper.vue';

  export default {
    components: {
      Swiper
    }
  }
</script>

<style scoped>

</style>
