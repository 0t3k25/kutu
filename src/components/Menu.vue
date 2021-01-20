<template>
  <div class="menu">
    <b-navbar type="dark" variant="dark">
      <!-- Navbar items -->
      <b-navbar-nav class="w-100 nav-justified">
        <b-nav-item href="#">カテゴリ</b-nav-item>
        <b-nav-item href="#">ブランド</b-nav-item>
        <b-nav-item href="#">絞り込み検索</b-nav-item>
        <b-nav-item href="#">みんなの声</b-nav-item>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  padding: 63px 0px 0px 0px;
}
</style>
