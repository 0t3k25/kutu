<template>
  <div id="category_women" class="container pt-3">
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
        <b-col class="mb-4" v-for="product in products" :key="product.id">
          <h4 class="product_name">{{ product.name }}</h4>
          <p>{{ product.description }}</p>
          <b-card
            no-body
            :img-src="product.images[0].url"
            img-alt="Type Image for men"
            text-variant="black"
            img-height="350"
          >
            <template #footer>
              <router-link
                class="show stretched-link"
                :to="`/category_women/product/${product.id}`"
              >
                {{ show }}
              </router-link>
            </template>
            <b-card-body>
              <b-card-title>{{ product.name }}</b-card-title>
              <b-card-sub-title>￥{{ product.listPriceJPY }}</b-card-sub-title>

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
  name: "Category_women",
  data() {
    return {
      places: [{ title: "ホーム", path: "/" }],
      here: "レディース",
      products: {},
      show: "商品を見る",
    };
  },
  mounted() {
    //本番環境
    fetch("https://fashionablelife.info/api//shoes/gender/WOMEN")
      .then((res) => {
        console.log("sucess2");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.products = res.shoes;
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
