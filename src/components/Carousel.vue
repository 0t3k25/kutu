<template>
<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
    <b-carousel-slide v-for="image in images" :key="image.id">
        <template #img>
          <img 
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="image.thumb"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

  </b-carousel>
  <p v-for="i in words" :key="i.id">{{ i.word }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
    images : [
      {id: 1, thumb: 'https://picsum.photos/1024/480/?image=55'},
      {id: 2, thumb: 'https://picsum.photos/1024/480/?image=55'},
      {id: 3, thumb: 'https://picsum.photos/1024/480/?image=55'}
    ],
    words: [
      { id: 1, word:"うんko"},
      { id: 2, word:"ちんこ"}
    ],
      slide: 0,
      sliding: null
    }
  },
  name: 'Carousel',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
