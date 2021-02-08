import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Standard from "../views/Standard.vue";
import Product_men from "../views/Product_men.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", name: "Top", component: Top },
    { path: "/standard", name: "standard", component: Standard },
    { path: "/product_men", name: "product_men", component: Product_men },
  ],
});

export default router;
