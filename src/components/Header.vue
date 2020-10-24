<template>
<div class="w-100">
  <b-navbar class="mb-1" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
          <img class="MainLogo" 
          src="../assets/brandlogo.jpeg">
          <b-navbar-brand href="#" class="pl-2">KUTU</b-navbar-brand>
      </b-navbar-brand>
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-text class=”>歩きやすい靴・オシャレな靴</b-nav-text>
      <!-- 小さくした際歩きやすい靴・おしゃれな靴の表示がおかしい-->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav right>
        <b-nav-item >マイページ</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MainLogo {
    height: 40px;
}
</style>
