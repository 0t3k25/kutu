<template>
  <div id="app">
    <Header />
    <Topimg />
    <RecommendItem />
    <MainComponent />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Topimg from "./components/Topimg.vue";
import RecommendItem from "./components/Recommend_item";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    Topimg,
    RecommendItem,
    MainComponent,
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
