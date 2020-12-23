<template>
  <div class="container">
    <p>{{info}}</p>
    <p>{{anoko}}</p>
    <p>{{id}}</p>
    <p>{{name}}</p>
    <p>{{number}}</p>
    <p>{{brand}}</p>
    <a href="/auth/google">Google でサインイン</a>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  data() {
    return {
      info: null,
      anoko: null,
      id: null,
      name: null,
      number: null,
      brand: null
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
