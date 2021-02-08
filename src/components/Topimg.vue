<template>
  <div class="pb-3">
    <div class="top-content">
      <div v-for="(image, index) in images" :key="index">
        <b-img :src="image.thumb" alt="top-img" class="top-img" />
      </div>
      <h1 class="top-text">
        {{ top_text }}<br />
        <b-button href="#" block pill variant="primary" class="mt-1">{{
          standard_pro
        }}</b-button>
      </h1>
      <div class="top-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          thumb:
            "https://storage.googleapis.com/my-kutu-data/top_img/topimg.jpg",
        },
      ],
      top_text: "help your workout",
      standard_pro: "KUTUの定番商品",
    };
  },
  name: "Topimg",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.top-img {
  width: 100%;
  height: 725px;
}
.top-content {
  position: relative; /*相対配置*/
}

.top-content h1 {
  position: absolute; /*絶対配置*/
  color: white;
  top: 40%;
  left: 60%;
  font-family: "ＭＳ 明朝";
}

h1.top-text {
  font-size: 20px;
}
@media only screen and (min-width: 651px) {
  /* 小画面用 */
  h1.top-text {
    font-size: 32px;
  }
}

@media only screen and (min-width: 961px) {
  /* 大画面用 */
  h1.top-text {
    font-size: 46px;
  }
}
</style>
