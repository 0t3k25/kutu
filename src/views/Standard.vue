<template>
  <div id="standard">
    <Standard_item></Standard_item>
  </div>
</template>

<script>
import Standard_item from "../components/Standard_item";

export default {
  name: "Srandard",
  components: {
    Standard_item,
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
