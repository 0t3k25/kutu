<template>
  <div id="app">
    <Header/>
    <Menu/>
    <MainComponent msg="Welcome to KUTU"/>
    <Try msg="aaaaaa"/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import MainComponent from './components/MainComponent.vue'
import Try from './components/default.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
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
