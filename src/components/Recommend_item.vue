<template>
  <div class="container sex-tab pt-5">
    <h1 class="text-center pt-5">あなたへのオススメ</h1>
    <div class="pt-4">
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-primary"
        content-class="mt-4"
        justified
      >
        <!-- 男性物 -->
        <b-tab title="メンズシューズ">
          <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="3">
            <b-col
              class="mb-4"
              v-for="type_men in types_men"
              :key="type_men.id"
            >
              <b-card
                class="text-center"
                :img-src="type_men.product_img_url"
                img-alt="Type Image for men"
                text-variant="black"
                img-height="300"
              >
                <template #footer>
                  <small>商品を見る</small>
                </template>
                <b-card-body>
                  <b-card-title>{{ type_men.product_name }}</b-card-title>
                  <b-card-sub-title>{{
                    type_men.product_info
                  }}</b-card-sub-title>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <!-- 女性物 -->
        <b-tab title="レディース">
          <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="3">
            <b-col
              class="mb-4"
              v-for="type_women in types_women"
              :key="type_women.id"
            >
              <b-card
                class="text-center"
                :img-src="type_women.product_img_url"
                img-alt="Type Image for women"
                text-variant="black"
                img-height="300"
              >
                <template #footer>
                  <small>商品を見る</small>
                </template>
                <b-card-body>
                  <b-card-title>{{ type_women.product_name }}</b-card-title>
                  <b-card-sub-title>{{
                    type_women.product_info
                  }}</b-card-sub-title>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <!-- アパレル -->
        <b-tab title="アパレル">
          <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3">
            <b-col class="mb-4" v-for="type in types" :key="type.id">
              <b-card
                class="text-center"
                :img-src="type.product_img_url"
                img-alt="Type Image"
                text-variant="black"
                img-height="300"
              >
                <template #footer>
                  <small>商品を見る</small>
                </template>
                <b-card-body>
                  <b-card-title>{{ type.product_name }}</b-card-title>
                  <b-card-sub-title>{{ type.product_info }}</b-card-sub-title>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sex_Tab",
  data() {
    return {
      types: null,
      types_men: null,
      types_women: null,
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    /*本番環境
    fetch("https://fashionablelife.info/api/kind_of_shoes/men")
      .then((res) => {
        console.log("sucess2");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.types_men = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました3");
      });
    fetch("https://fashionablelife.info/api/kind_of_shoes/women")
      .then((res) => {
        console.log("sucess3");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.types_women = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました4");
      });
    fetch("https://fashionablelife.info/api/kind_of_shoes/other")
      .then((res) => {
        console.log("sucess1");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.types = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました2");
      });
      */
    //開発環境
    fetch("http://localhost:3000/kind_of_shoes/men")
      .then((res) => {
        console.log("sucess2");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.types_men = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました3");
      });
    fetch("http://localhost:3000/kind_of_shoes/women")
      .then((res) => {
        console.log("sucess3");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.types_women = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました4");
      });
    fetch("http://localhost:3000/kind_of_shoes/other")
      .then((res) => {
        console.log("sucess1");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.types = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました2");
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  color: red;
}
.sex-tab {
  height: 10px;
}
</style>
