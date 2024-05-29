<template>
    <div class="w-20 h-20 rounded-full border-4 border-main-and-seperator p-4 flex items-center justify-center reddit-mono-600 shadow-xl shadow-main ">
            <span>{{ occupationPercentage }}</span>
        </div>
</template>


<script>
export default {
  name: 'FloorOccupationStatus',
  props: {
    idFloor: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      occupationPercentage: 0,
      errorMessage: ''
    };
  },



  methods: {
    
  }
};
</script>