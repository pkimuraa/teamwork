<template>
  <div class="container">
    <img 
      src="@/assets/images/marketing-image.png"
      class="item"
    />
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

  data() {
    return {
      data: null,
    }
  },

  async fetch() {
    this.data = await this.$http.$get('https://eoyge3duj7xtdqd.m.pipedream.net/');
  },
}
</script>

