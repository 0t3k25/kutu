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
        <template>
          <div>
            <b-button variant="outline-info" class="mb-2"
              >マイページへ
              <b-icon icon="key" aria-hidden="true"></b-icon>
            </b-button>
          </div>
        </template>
        <template>
          <div>
            <b-button variant="outline-info"
              >カートを見る
              <b-icon icon="cart" aria-hidden="true"></b-icon>
            </b-button>
          </div>
        </template>
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
