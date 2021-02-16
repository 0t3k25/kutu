import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Standard from "../views/Standard.vue";
import Category_men from "../views/Category_men.vue";
import Category_women from "../views/Category_women.vue";
import Apparel from "../views/Apparel.vue";
import product_men from "../views/Product_men.vue";
import product_women from "../views/Product_women.vue";
import product_apparel from "../views/Product_apparel.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    //トップページ
    { path: "/", name: "Top", component: Top },
    //定番商品
    { path: "/standard", name: "standard", component: Standard },
    //メンズ商品一覧
    {
      path: "/category_men",
      name: "Category_men",
      component: Category_men,
    },
    //メンズ商品
    {
      path: "/category_men/product/:num",
      component: product_men,
      props: (route) => ({ num: Number(route.params.num) }),
    },
    //レディース商品一覧
    {
      path: "/category_women",
      name: "Category_women",
      component: Category_women,
    },
    //レディース商品
    {
      path: "/category_women/product/:num",
      component: product_women,
      props: (route) => ({ num: Number(route.params.num) }),
    },
    //アパレル商品一覧
    { path: "/apparel", name: "apparel", component: Apparel },
    //アパレル商品
    {
      path: "/apparel/product/:num",
      component: product_apparel,
      props: (route) => ({ num: Number(route.params.num) }),
    },
  ],
});

export default router;
