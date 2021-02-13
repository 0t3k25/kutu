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
          {{ product.category_name }}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <h1>{{ product.category_name }}</h1>
    <b-img :src="product.category_img_url" id="bigimage"></b-img>
    <!-- 小さい画像複数表示 -->
    <b-row class="container">
      <b-img
        v-for="(image, index) in api"
        :key="index"
        class="thumb pt-3 pr-4 pb-5"
        :src="image.product_img_url"
      ></b-img>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Standard",
  data() {
    return {
      api: [
        {
          product_name: "KUTU スニーカー",
          product_img_url:
            "https://storage.googleapis.com/my-kutu-data/kind_of_kutu/スニーカー.jpg",
          id: 0,
          gender: "unisex",
          product_info: "快適なスニーカー",
        },
        {
          product_name: "KUTUラバー",
          product_img_url:
            "https://storage.googleapis.com/my-kutu-data/kind_of_kutu/%E3%83%A9%E3%83%8F%E3%82%99%E3%83%BC.jpeg",
          id: 1,
          gender: "unisex",
          product_info: "高い耐水性",
        },
        {
          product_name: "KUTU ブーツ",
          product_img_url:
            "https://storage.googleapis.com/my-kutu-data/kind_of_kutu/%E3%83%95%E3%82%99%E3%83%BC%E3%83%84.jpg",
          id: 2,
          gender: "unisex",
          product_info: "アウトドアに最適",
        },
      ],
      list: {
        aaaa: "unko",
        bbbbbb: "ちんこ",
        img: ["unko", "ちんこ", "tikijgfiawi"],
      },

      name: "KUTUの定番商品",
      product: {},
      category_name: null,
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
        this.product = res[this.num - 1];
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました3");
      });
  },
};
</script>

<style>
.thumb {
  height: 150px;
  width: 150px;
}
</style>
