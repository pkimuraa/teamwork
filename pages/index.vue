<template>
  <div class="container">
    <ImageBox class="item"/>
    <div class="item">
      <Accordion 
        :tag="data.tag"
        :title="data.title"
        :data="data.items"
      />
    </div>
  </div>
</template>

<script>
import Accordion from '../components/accordion.vue';

export default {
  components: { 
    Accordion 
  },
  data(){
    return {
      data: null,
    }
  },  
  async fetch(){
    this.data = await this.$http.$get('https://eoyge3duj7xtdqd.m.pipedream.net/');
  },

}
</script>

<style>
.title{
  padding-left: 18px !important;
  margin-bottom: 1.125rem;
}
</style>
