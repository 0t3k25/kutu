<template>
  <div class="pt-4">
    <div class="container">
      <h2>カテゴリー別</h2>
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="3">
        <b-col class="mb-4" v-for="category in categories" :key="category.id">
          <b-card
            no-body
            class="text-center"
            :img-src="category.category_img_url"
            img-alt="Type Image for men"
            text-variant="black"
            img-height="300"
          >
            <b-card-body>
              <b-card-title>
                <a class="category_name stretched-link" href="#">
                  {{ category.category_name }}</a
                ></b-card-title
              >
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      categories: null,
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    //本番環境

    fetch("https://fashionablelife.info/api/category")
      .then((res) => {
        console.log("sucess1");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.categories = res;
      })
      .catch((err) => {
        console.log(err);
        console.log("失敗しました2");
      });

    //開発環境
    /*
    fetch("http://localhost:3000/category")
      .then((res) => {
        console.log("sucess1");
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        this.categories = res;
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
.category_name {
  color: black;
}
</style>
