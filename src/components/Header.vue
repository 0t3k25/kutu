<template>
  <div class="fixed-top">
    <b-navbar toggleable="true" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <b-navbar-brand href="#" class="pl-2">KUTU</b-navbar-brand>
      </b-navbar-brand>
      <b-nav-text>歩きやすい靴・オシャレな靴 </b-nav-text>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>マイページ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
