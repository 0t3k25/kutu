<template>
  <div>
    <div class="top-content">
      <div v-for="image in images" :key="image.id">
        <b-img :src="image.thumb" alt="top-img" class="top-img" />
      </div>
      <p>あなたにとって最高の一足を</p>
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
  padding-top: 65px;
}
.top-content {
  position: relative; /*相対配置*/
}

.top-content p {
  position: absolute; /*絶対配置*/
  color: white; /*文字は白に*/
  top: 50%;
  left: 50%;
}
</style>
