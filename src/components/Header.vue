<template>
<div class="w-100">
  <b-navbar toggleable="lg" type="dark" variant="dark">
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
  <nav class="period">
  </nav>
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
@-webkit-keyframes period-color {
  0% { background-color: red; }
  10% { background-color: yellow; }
  20% { background-color: greenyellow; }
  30% { background-color: skyblue; }
  40% { background-color: blueviolet; }
  50% { background-color: red;}
}

@keyframes period-color {
  0% { background-color: red; }
  20% { background-color: yellow; }
  40% { background-color: greenyellow; }
  60% { background-color: skyblue; }
  80% { background-color: blueviolet; }
  100% { background-color: red;}
}
.period{
  padding: 2px;
  animation: period-color 10s infinite;
  -webkit-animation: period-color 10s infinite;
}
</style>
