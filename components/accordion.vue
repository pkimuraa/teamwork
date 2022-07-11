<template>
    <div class="accordion">
      <h6 class="accordion__tag"> {{ tag }}</h6>
      <h1 class="accordion__title"> {{ title }}</h1>
      
      <button v-for="(item, index) in data"
        class="accordion__item pointer"
        :style="expandedIndex === index ? `height: ${sumHeight}px` : `height: ${defaultHeight}px` "
        @click="toggle(index)"
        :key="item.tag"
      >
        <h2 
          class="accordion__item__title"
          :class="expandedIndex === index ? 'accordion__item__title--expanded' : ''"
        >
          {{ item.title}} 
        </h2>

        <img 
          src="@/assets/images/icons/arrow.png" 
          class="accordion__item__icon"
          :class="expandedIndex === index ? 'accordion__item__icon--expanded' : ''"
        />
        
        <div 
          class="accordion__content" 
          :ref="`text${index}`"
        >
          <p> {{ item.text}} </p>
          <img :src="item.image" class="accordion__content__img"/>
        </div>
      </button>
    </div>
</template>

<script>
export default {
  props: {
    tag:{
      type: String,
      default: 'Title'
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

  data() {
    return{
      expandedIndex: -1,
      items: [],
      sumHeight: 0,
      defaultHeight: 60,
      offset: 18,
    }
  },

  mounted() {
    this.sumHeight = this.defaultHeight + this.$refs.text0?.[0]?.clientHeight - this.offset;
    this.$nextTick(() => {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    toggle(index) {
      if (this.expandedIndex === index){
        this.expandedIndex = -1;
        return
      }
      this.expandedIndex = index;
      this.sumHeight = this.defaultHeight + this.$refs[`text${this.expandedIndex}`][0].clientHeight - this.offset;
    },

    onResize(){
      this.expandedIndex = -1;
    }
  }
}
</script>
