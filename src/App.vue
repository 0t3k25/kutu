<template>
  <div id="app">
    <Header/>
    <Menu/>
    <Carousel/>
    <Sex_Tab/>
    <RecommendItem/>
    <MainComponent/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Carousel from './components/Carousel.vue'
import Sex_Tab from './components/Sex_Tab.vue'
import MainComponent from './components/MainComponent.vue'
import RecommendItem from './components/Recommend_item'


export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Carousel,
    Sex_Tab,
    MainComponent,
    RecommendItem
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
