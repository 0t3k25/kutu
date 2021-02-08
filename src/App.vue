<template>
  <div id="app">
    <Header></Header>
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Header,
    Menu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
