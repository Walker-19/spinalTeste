<template>
  <span :class="['w-max px-2 py-1 font-bold rounded-xl text-white absolute right-4 text-xs', isOccuped ? 'bg-red-500' : 'bg-green-500']">
    {{ isOccuped ? 'Occupé' : 'Non Occupé' }}
  </span>
</template>

<script>
import ApiService from '../servicesapi'; 

export default {
  name: 'StatusRoom',
  props: {
    idRoom: Number,
  },

  data() {
    return {
      isOccuped: Boolean
    };
  },

  async mounted() {
    await this.hasOccuped(this.idRoom);
  },

  methods: {
    async hasOccuped(idRoom) {
     try {
            const data = await ApiService.statusRoom(idRoom);
            const statusRoom = data.map(status => ({status: status.endpoints}))

               statusRoom.filter(endpoint => endpoint).map(endpoint => (
                this.isOccuped = endpoint.status[4].currentValue
                 
              ))
      } catch (error) {
        console.error('Error fetching room status:', error);
        this.errorMessage = 'Failed to retrieve room status. Please try again later.';
      }
    }
  }
};
</script>
