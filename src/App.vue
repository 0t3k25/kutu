<template>
  <div id="app">
    <Header/>
    <Menu/>
    <Carousel/>
    <MainComponent/>
    <Try msg="aaaaaa"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Carousel from './components/Carousel.vue'
import MainComponent from './components/MainComponent.vue'
import Try from './components/default.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Carousel,
    MainComponent,
    Try
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
