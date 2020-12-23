<template>
  <div class="container">
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-primary"
      content-class="mt-4"
      justified
    >
      <b-tab title="全て">
        <b-row>
          <b-col class="mb-4" v-for="type in types" :key="type.id">
            <b-card
              overlay
              :img-src="type.product_img_url"
              img-alt="Type Image"
              text-variant="black"
            >
              <template #footer>
                <small>{{type.product_name}}</small>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="メンズ">
        <b-row>
          <b-col class="mb-4" v-for="type_men in types_men" :key="type_men.id">
            <b-card
              overlay
              :img-src="type_men.product_img_url"
              img-alt="Type Image for men"
              text-variant="black"
            >
              <template #footer>
                <small>{{type_men.product_name}}</small>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="レディース">
        <b-row>
          <b-col class="mb-4" v-for="type_women in types_women" :key="type_women.id">
            <b-card
              overlay
              :img-src="type_women.product_img_url"
              img-alt="Type Image for men"
              text-variant="black"
            >
              <template #footer>
                <small>{{type_women.product_name}}</small>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "Sex_Tab",
  data() {
    return {
      types: null,
      types_men: null,
      types_women: null
    };
  },
  props: {
    msg: String
  },
  mounted() {
    fetch("http://localhost:3000/kind_of_shoes")
      .then(res => {
        console.log("sucess");
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.types = res;
      })
      .catch(err => {
        console.log(err);
        console.log("失敗しました");
      });
    fetch("http://localhost:3000/kind_of_shoes/men")
      .then(res => {
        console.log("sucess");
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.types_men = res;
      })
      .catch(err => {
        console.log(err);
        console.log("失敗しました");
      });
    fetch("http://localhost:3000/kind_of_shoes/women")
      .then(res => {
        console.log("sucess");
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.types_women = res;
      })
      .catch(err => {
        console.log(err);
        console.log("失敗しました");
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  color: red;
}
</style>