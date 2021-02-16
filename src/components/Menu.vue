<template>
  <div class="menu">
    <b-navbar type="dark" variant="dark">
      <!-- Navbar items -->
      <b-navbar-nav
        class="w-100 nav-justified"
        v-for="(item, index) in items"
        :key="index"
      >
        <b-nav-item>
          <router-link class="item" v-bind:to="item.path"
            >{{ item.title }}
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  padding: 58px 0px 0px 0px;
  background-color: #ccff00;
}
.item {
  color: white;
}
</style>
