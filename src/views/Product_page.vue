<template>
  <div id="standard" class="container pt-5">
    <div>
      <b-breadcrumb>
        <b-breadcrumb-item>
          <router-link to="/">ホーム</router-link></b-breadcrumb-item
        >
        <b-breadcrumb-item>
          <router-link to="/product_men">メンズシューズ</router-link>
        </b-breadcrumb-item>
        <b-breadcrumb-item active>
          {{ types[num].category_name }}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <h1>{{ types[num].category_name }}</h1>
    <p>このページはID.{{ num }}の詳細を表示する</p>
  </div>
</template>

<script>
export default {
  name: "Standard",
  data() {
    return {
      name: "KUTUの定番商品",
      types: null,
    };
  },
  props: { num: Number },
  mounted() {
    //本番環境
    fetch("https://fashionablelife.info/api/category/men")
      .then((res) => {
        console.log("sucess2");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.types = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました3");
      });
  },
};
</script>
