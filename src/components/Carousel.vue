<template>
<div>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="2000"
    controls
    indicators
  >
    <b-carousel-slide v-for="image in images" :key="image.id" :style="image.styles">
      <template #img>
        <div class="container">
          <img
            class="tcb_main img-fluid w-100"
            :src="image.thumb"
            alt="image slot"
          > 
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
  <div class="tcb_thumb">
    <div class="container">
      <div>
      </div>

    </div>
  </div>

  <p class="mt-4">
    Slide #: {{ slide }}<br>
    Sliding: {{ sliding }}
  </p>
  <p v-for="i in words" :key="i.id">{{ i.word }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
    images : [
      {id: 1, thumb: 'https://www.timberland.com.sg/wp-content/uploads/2016/10/Featureimage.jpg',
        styles:{backgroundColor:"#e6e6fa"}},
      {id: 2, thumb: 'https://picsum.photos/1024/480/?image=55',
        styles:{backgroundColor:"#8fbc8f"}},
      {id: 3, thumb: 'https://picsum.photos/1024/480/?image=55',
        styles:{backgroundColor:"#483d8b"}}
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
.tcb_main{
  height: 500px;
}
</style>
