<template>
  <div id="app">
    <Header></Header>
    <Topimg></Topimg>
    <RecommendItem></RecommendItem>
    <Category></Category>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Topimg from "./components/Topimg";
import RecommendItem from "./components/Recommend_item";
import Category from "./components/Category";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Topimg,
    RecommendItem,
    Category,
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
