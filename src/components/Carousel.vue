<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="image in images"
        :key="image.id"
        :style="image.styles"
      >
        <template #img>
          <div class="container">
            <img
              class="tcb_main img-fluid w-100"
              :src="image.thumb"
              alt="image slot"
            />
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4 text-center">Slide #: {{ slide }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: null,
      slide: 0,
    };
  },
  name: "Carousel",
  props: {
    msg: String,
  },
  mounted() {
    fetch("http://fashhionablelife.info/api/topImage")
      .then((res) => {
        //console.log("sucess");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.images = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました1");
      });
  },
};
</script>

<style scoped>
.tcb_main {
  height: 550px;
}
</style>
