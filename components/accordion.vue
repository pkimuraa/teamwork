<template>
    <div class="accordion ">
      <h6 class="accordion__tag"> {{ tag }}</h6>
      <h1 class="accordion__title"> {{ title }}</h1>
      <div v-for="(item, index) in data"
        class="accordion__item pointer"
        :style="expandedIndex === index ? `height: ${sumHeight}px` :'height:60px' "
        @click="toggle(index)"
        :key="item.tag"
      >
        <h2 class="accordion__item__title">
          {{ item.title}} 
        </h2>
        <img 
          src="@/assets/images/icons/arrow.png" 
          class="accordion__item__icon"
        />
        <div 
          class="accordion__content" 
          :ref="`text${index}`"
        >
          <p> {{ item.text}} </p>
          <img v-if="isMobile" :src="item.image" />
        </div>
      </div>
    </div>
</template>

<script>
export default{
  props: {
    tag:{
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null,
    },
    data: {
      type: Array,
      default: null,
    }
  },  

  data(){
    return{
      isMobile: false,
      expandedIndex: -1,
      items: [],
      sumHeight: 0
    }
  },
  async fetch(){
    this.items = await this.$http.$get('https://eoyge3duj7xtdqd.m.pipedream.net/');
  },
  mounted(){
    this.sumHeight = 60 + this.$refs.text0[0].clientHeight - 18;
  },

  methods: {
    toggle(index) {
      if (this.expandedIndex === index){
        this.expandedIndex = 69420;
        return
      }
      this.expandedIndex = index;
      this.sumHeight = 60 + this.$refs[`text${this.expandedIndex}`][0].clientHeight - 18;
  },
}
}
</script>

<style lang="css">

</style>
