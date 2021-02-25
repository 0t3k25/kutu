<template>
  <div id="standard_item" class="pt-4">
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item>
          <router-link to="/">ホーム</router-link></b-breadcrumb-item
        >
        <b-breadcrumb-item>
          KUTUの定番商品
        </b-breadcrumb-item>
        <b-breadcrumb-item active>
          {{ product.name }}
        </b-breadcrumb-item>
      </b-breadcrumb>
      <h1>{{ product.name }}</h1>
    </b-container>
    <div class="product_image">
      <b-carousel
        id="carousel-1"
        :interval="3000"
        controls
        indicators
        background="#ababab"
      >
        <b-carousel-slide v-for="(image, index) in product.images" :key="index">
          <template #img>
            <img class="bigimage" :src="image.url" alt="image slot" />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!-- ここのレイアウトは後から考える
    <b-container class="pb-5">
      <h5>size</h5>
      <b-row class="container text-center center">
        
        <b-card v-for="(size, index) in sizez" :key="index" class="mr-3">{{
          size
        }}</b-card>
      </b-row>
    </b-container>
    -->
    <div class="pb-5 container">
      <b-button block variant="outline-primary">購入する</b-button>
    </div>
    <div class="container pb-5">
      <template>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info"
                >商品紹介</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text> </b-card-text>
                <b-card-text>{{ product.description }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info"
                >配送と返品</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>{{ D_R_description }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "standard_item",
  data() {
    return {
      sizez: [23.5, 24.0, 24.5, 25.0, 25.5, 26.0, 26.5, 27.0, 27.5, 28.0, 28.5],
      name: "KUTUの定番商品",
      product: {},
      category_name: null,
      D_R_description:
        "送料無料。一部の商品を除き、30日間返送料無料にて返品可能です。",
    };
  },

  props: { num: Number },

  mounted() {
    //本番環境
    fetch(`https://fashionablelife.info/api//shoes/7`)
      .then((res) => {
        console.log("sucess2");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.product = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました3");
      });
  },
};
</script>
<style>
.product_image {
  padding-bottom: 30px;
}
.bigimage {
  width: 100%;
  height: 500px;
  padding-left: 12%;
  padding-right: 12%;
}
.color {
  display: inline-block;
}
</style>
