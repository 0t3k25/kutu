import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Standard from "../views/Standard.vue";
import Product from "../views/Product_men.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", name: "Top", component: Top },
    { path: "/standard", name: "standard", component: Standard },
    { path: "/product", component: Product },
  ],
});

export default router;
