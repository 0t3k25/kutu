<template>
  <div style="background-color: rgba(0, 0, 0, 0.7)">
    <div class="container">
      <!-- メール書き込みフォーム--->
      <div class="pt-4">
        <span class="text-white">メールアドレスを登録</span>
        <b-form inline class="mb-4">
          <label class="sr-only" for="inline-form-input-name"></label>
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mb-sm-0 mr-2"
            placeholder="メールアドレス"
          ></b-form-input>
          <b-button variant="primary">登録</b-button>
        </b-form>
      </div>
      <!-- ヘルプ等 -->
      <div>
        <b-container class="bv-example-row">
          <b-row cols="1" cols-sm="2" class=" pt-4 pb-3">
            <b-col class="pb-3">
              <h5 class="text-white">ヘルプ</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white pb-2">返品・交換</a>
                </li>
                <li>
                  <a href="#" class="text-white">お問い合わせ</a>
                </li>
              </ul>
            </b-col>
            <b-col>
              <h5 class="text-white p">ショップ</h5>
              <ul class="list-unstyled">
                <li v-for="(item, index) in items" :key="index">
                  <router-link class="text-white" v-bind:to="item.path"
                    >{{ item.title }}
                  </router-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <template>
        <div>
          <b-img
            center
            src="https://storage.googleapis.com/my-kutu-data/top_img/logo.jpg"
            rounded="circle"
            alt="Circle image"
            width="80"
          ></b-img>
        </div>
      </template>
    </div>
    <footer class="text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center p-3">
        © 2020 Copyright:
        <a class="text-dark" href="#">KUTU</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      items: [
        { title: "定番", path: "/standard" },
        { title: "メンズ", path: "/category_men" },
        { title: "レディース", path: "/category_women" },
        { title: "アパレル", path: "/apparel" },
      ],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
