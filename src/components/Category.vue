<template>
  <div class="pt-4">
    <div class="container">
      <h2>カテゴリー別</h2>
      <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="3">
        <b-col
          class="mb-4"
          v-for="(category, index) in categories"
          :key="index"
        >
          <b-card
            no-body
            class="text-center"
            :img-src="category.img_url"
            img-alt="Type Image for men"
            text-variant="black"
            img-height="300"
          >
            <b-card-body>
              <b-card-title>
                <a class="category_name stretched-link" href="#">
                  {{ category.name }}</a
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
      categories: [
        {
          img_url:
            "https://storage.googleapis.com/my-kutu-data/category/%E3%83%A1%E3%83%B3%E3%82%B9%E3%82%99%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%99.jpg",
          id: 1,
          name: "メンズシューズ",
        },
        {
          img_url:
            "https://storage.googleapis.com/my-kutu-data/category/%E3%83%AC%E3%83%86%E3%82%99%E3%82%A3%E3%83%BC%E3%82%B9%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%99.jpg",
          id: 2,
          name: "レディースシューズ",
        },
        {
          img_url:
            "https://storage.googleapis.com/my-kutu-data/category/%E3%82%A2%E3%83%8F%E3%82%9A%E3%83%AC%E3%83%AB.jpeg",
          id: 3,
          name: "アパレル",
        },
      ],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category_name {
  color: black;
}
</style>
