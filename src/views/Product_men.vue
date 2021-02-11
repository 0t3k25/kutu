<template>
  <div id="product_men" class="container pt-5">
    <div>
      <b-breadcrumb
        class="place_holder"
        v-for="(place, index) in places"
        :key="index"
      >
        <b-breadcrumb-item>
          <router-link v-bind:to="place.path">{{
            place.title
          }}</router-link></b-breadcrumb-item
        >

        <b-breadcrumb-item active> {{ here }} </b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <div>
      <b-row cols="1" cols-sm="2" cols-lg="3">
        <b-col class="mb-4" v-for="type in types" :key="type.num">
          <h6 class="product_name">{{ name }}</h6>
          <p>{{ description }}</p>
          <b-card
            no-body
            :img-src="type.category_img_url"
            img-alt="Type Image for men"
            text-variant="black"
            img-height="350"
          >
            <template #footer>
              <router-link
                class="show stretched-link"
                :to="`/product/${type.num}`"
              >
                {{ show }}
              </router-link>
            </template>
            <b-card-body>
              <b-card-title>{{ name }}</b-card-title>
              <b-card-sub-title class="pb-3">{{ color }}</b-card-sub-title>
              <b-card-sub-title>{{ price }}</b-card-sub-title>

              <!-- price text -->
              <!-- カートに入れる -->
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product_men",
  data() {
    return {
      name: "名前",
      description: "あああああ",
      color: "色",
      price: "値段",
      places: [{ title: "ホーム", path: "/" }],
      here: "メンズシューズ",
      types: null,
      show: "商品を見る",
    };
  },
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

<style>
.place_holder {
  background-color: white;
}
.product_name {
  font-weight: bold;
}
</style>
