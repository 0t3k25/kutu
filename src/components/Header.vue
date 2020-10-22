<template>
<div class="header">
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#" class="mt-1">
        <img class="MainLogo" 
        src="../assets/brandlogo.jpeg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!-- 小さくした際歩きやすい靴・おしゃれな靴の表示がおかしい-->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mt-1" left>
        <span>歩きやすい靴・おしゃれな靴</span>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">マイページ</b-nav-item>
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
.header{
  background: #9370db;
}
.MainLogo {
    height: 35px;
}

</style>
