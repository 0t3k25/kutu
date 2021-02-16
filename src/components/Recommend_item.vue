<template>
  <div class="container pt-5 pb-5">
    <h1 class="text-center pt-5">{{ recommned }}</h1>
    <div class="pt-2">
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
              v-for="(rec_men, index) in rec_mens"
              :key="index"
            >
              <b-card
                no-body
                class="text-center"
                :img-src="rec_men.images[0].url"
                img-alt="Type Image for men"
                text-variant="black"
                img-height="300"
              >
                <template #footer>
                  <router-link class="stretched-link" :to="rec_men.path">
                    <b-button variant="primary"> {{ show }}</b-button>
                  </router-link>
                </template>
                <b-card-body>
                  <b-card-title>{{ rec_men.name }}</b-card-title>
                  <b-card-sub-title>{{ rec_men.category }}</b-card-sub-title>
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
              v-for="(rec_women, index) in rec_womens"
              :key="index"
            >
              <b-card
                no-body
                class="text-center"
                :img-src="rec_women.images[0].url"
                img-alt="Type Image for men"
                text-variant="black"
                img-height="300"
              >
                <template #footer>
                  <router-link class="stretched-link" :to="rec_women.path">
                    <b-button variant="primary"> {{ show }}</b-button>
                  </router-link>
                </template>
                <b-card-body>
                  <b-card-title>{{ rec_women.name }}</b-card-title>
                  <b-card-sub-title>{{ rec_women.category }}</b-card-sub-title>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <!-- アパレル -->
        <b-tab title="アパレル">
          <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3">
            <b-col
              class="mb-4"
              v-for="(rec_apparel, index) in rec_apparels"
              :key="index"
            >
              <b-card
                no-body
                class="text-center"
                :img-src="rec_apparel.images[0].url"
                img-alt="Type Image for men"
                text-variant="black"
                img-height="300"
              >
                <template #footer>
                  <router-link class="stretched-link" :to="rec_apparel.path">
                    <b-button variant="primary"> {{ show }}</b-button>
                  </router-link>
                </template>
                <b-card-body>
                  <b-card-title>{{ rec_apparel.name }}</b-card-title>
                  <b-card-sub-title>{{
                    rec_apparel.category
                  }}</b-card-sub-title>
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
      show: "商品を見る",
      recommned: "あなたへのオススメ",
      rec_mens: [
        {
          name: "NRGY スター スリッポン",
          category: "スニーカー",
          path: "/category_men/product/2",
          images: [
            {
              id: 4,
              url:
                "https://storage.cloud.google.com/my-kutu-data/product/image2_1.png",
            },
          ],
        },
        {
          name: "ウルトラブースト",
          category: "スニーカー",
          path: "/category_men/product/5",
          images: [
            {
              id: 10,
              url:
                "https://storage.googleapis.com/my-kutu-data/product/image5_1.png",
            },
          ],
        },
        {
          name: "スポーツマスク",
          category: "マスク",
          path: "/category_men/product/10",

          images: [
            {
              id: 17,
              url:
                "https://storage.googleapis.com/my-kutu-data/product/image10_1.png",
            },
          ],
        },
      ],
      rec_womens: [
        {
          name: "ニューバランス WL",
          category: "スニーカー",
          path: "/category_women/product/3",
          images: [
            {
              url:
                "https://storage.googleapis.com/my-kutu-data/product/image3_1.png",
            },
          ],
        },
        {
          name: "ウルトラブースト",
          category: "スニーカー",
          path: "/category_women/product/5",
          images: [
            {
              id: 10,
              url:
                "https://storage.googleapis.com/my-kutu-data/product/image5_1.png",
            },
          ],
        },
      ],
      rec_apparels: [
        {
          name: "スポーツマスク",
          category: "マスク",
          path: "/apparel/product/10",

          images: [
            {
              id: 17,
              url:
                "https://storage.googleapis.com/my-kutu-data/product/image10_1.png",
            },
          ],
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    //本番環境
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

    //開発環境
    /*
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
      */
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
