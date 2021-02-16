<!-- 定番商品のコンポーネントSrandard.vueに使用 -->
<template>
  <div id="standard_item" class="container">
    <div>
      <h1 class="text text-center">{{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Standard_item",
  data() {
    return {
      name: "現在準備中",
    };
  },
};
</script>
<style scoped>
.text {
  padding: 100px 200px 200px 200px;
}
</style>
