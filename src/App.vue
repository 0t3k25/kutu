<template>
  <div id="app">
    <Header></Header>
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Footer,
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
