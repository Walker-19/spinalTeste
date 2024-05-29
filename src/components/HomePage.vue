<template>
  <div class="w-full h-screen bg-main text-contrast flex flex-col gap-4 p-2 overflow-hidden">
    <div class="w-full relative h-14 bg-subtle-main font-montserrat-500 text-xl rounded-xl text-contrast p-4">
      <div class="bg-subtle-main min-w-40  w-48 min-h-10  flex flex-row items-center font-mono  px-5 gap-1 h-max rounded-xl absolute -bottom-5 right-0">
          <span class="text-sm font-bold text-contrast">
            Building : usine
          </span>
          <img :src="imgUsine" alt="" class="w-12 absolute right-0 border-4 border-main-bg h-12 rounded-full">
    </div>
      {{ text }} 


      
    </div>
    
      <card-floor-vue />
   
    
  </div>
</template>

<script>


import CardFloorVue from './CardFloor.vue';
import imgUsine from '../assets/images/usine.avif'; 

export default {
  name: 'HomePage',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  components: {
   CardFloorVue

  },
  data() {
    return {
      imgUsine,
      floors: [],
      error: null,
      idFloor: Number
    };
  },
  async created() {
   
  },
 
}
</script>
