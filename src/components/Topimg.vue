<template>
  <div>
    <div class="top-content">
      <div v-for="image in images" :key="image.id">
        <b-img :src="image.thumb" alt="top-img" class="top-img" />
      </div>
      <h1 class="top-text">
        help your workout<br />
        <b-button block pill variant="primary" class="mt-1"
          >KUTUの定番商品</b-button
        >
      </h1>
      <div class="top-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: null,
    };
  },
  name: "Topimg",
  props: {
    msg: String,
  },
  mounted() {
    fetch("https://fashionablelife.info/api/topImage")
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
.top-img {
  width: 100%;
  height: 725px;
  padding: 65px 0px 0px 0px;
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
