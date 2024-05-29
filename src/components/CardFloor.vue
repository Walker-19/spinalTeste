
<template >
<div class="w-full min-h-52 mt-2 bg-subtle-main/50  backdrop-blur-xl rounded-xl relative flex flex-row justify-around gap-4 items-center p-4">
    <div class="w-20 h-8 bg-subtle-main/50 border-4 border-main-bg absolute flex justify-center items-center rounded-lg py-2 px-4 -top-4 -left-1">
      <span class="text-sm font-bold text-contrast">Etages</span>
    </div>
 <div 
 class="w-full flex justify-around overflow-x-auto"
    v-for="(floor, index) in floors " :key="index" 
 >
    <div class="w-80 min-h-40 rounded-lg bg-component-color flex items-center p-4 justify-between font-montserrat-800 relative overflow-hidden group cursor-pointer" 
        @click="handleClick(floor.id)"
        :class="{'border-2 border-contrast ': floor.select}"
    >
    <div 
    class="absolute -left-5 w-28 h-28 rotate-45 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl bg-gradient-to-tr from-slate-400/25 to-white/55 hidden group-hover:flex transition-colors  duration-200 backdrop-blur-2xl z-0"
    :class="{'flex': floor.select}"
        v-motion 
         :initial="{  x: 100, rotate: 0 }"
        :visible="{ x: 0, opacity: 1, rotate: 140 }"
    >
            
    </div>
        <h4 class="text-start text-2xl z-10 p-4 reddit-mono-600 tracking-widest">
            {{ floor.name }}
        </h4>

          <percentage-floor-vue :idFloor="floor.id" />
    </div>

 </div>
  
</div>
<div v-if="rooms" >

      <ul v-if="rooms" class="w-full rounded-lg min-h-max h-96 pb-24 overflow-hidden overflow-y-auto p-4 bg-component-color">
        <div v-for="(room, index) in rooms" :key="index" class="flex gap-4 w-full h-max pb-10 items-center justify-center">
                <li class="w-li border shadow-lg shadow-subtle-main  border-main-and-seperator p-2 rounded-xl flex flex-col relative">
                  <span>
                   {{room.name}}
                  </span>
                  <span class="px-3 text-xs text-slate10 mt-2">#{{room.id}}</span> 

                
                      <status-room-vue :idRoom="room.id" />
                  
                </li>
        </div>
    </ul>

</div>
</template>




<script>
import ApiService from '../servicesapi'
import PercentageFloorVue from './PercentageFloor.vue'
import StatusRoomVue from './StatusRoom.vue'


export default {
    name : 'CardFloor',
    components : {
      StatusRoomVue, 
      PercentageFloorVue
    },
    data (){
        return {
            floors: [],
        isSelected: {
            type: Boolean,
            default: false,
    },
  
    rooms : [],
    statusRoom: []
        }

    },
    methods: {
        async handleClick(index){
            console.log(index)
            this.floors.forEach(element => {
                if (element.id == index) {
                        element.select = !element.select
                } else {
                    element.select = false; 
                }
            });
            const data = await ApiService.RoomList(index);
            this.rooms = data.map(room => ({name: room.name, type: room.type, id: room.dynamicId}))
           
        },

    },
      async created() {
    try {
      const data = await ApiService.fetchData('floor/list');
      this.floors = data.map(room => ({ name: room.name, id: room.dynamicId, select : false }));
      console.log(this.floors)
      if (this.floors.length > 0) {
        this.idFloor = this.floors[0].id;
        this.floors[0].select = true;

        const data = await ApiService.RoomList(this.floors[0].id);
        this.rooms = data.map(room => ({name: room.name, type: room.type, id: room.dynamicId}))
      }
      console.log(this.idFloor)
    } catch (error) {
      this.error = error.message;
      console.log(error)
    }
  },
 
}

</script>

