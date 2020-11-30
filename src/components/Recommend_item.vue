<template>
  <div class="container">
    <p>{{info}}</p>
    <p>{{anoko}}</p>
    <p>{{id}}</p>
    <p>{{name}}</p>
    <p>{{number}}</p>
    <p>{{brand}}</p>
  </div>
</template>

<script>
export default {
  name: 'RecommendItem',
  data(){
    return{
      info:null, 
      anoko:null,
      id:null,
      name:null,
      number:null,
      brand:null,
    }
  },
  props: {
    msg: String
  },
  mounted() {
    fetch('http://localhost:3000/')
    .then(res =>  {
      console.log('sucess');
      return res.json()
    })
    .then(res => {
      console.log(res)
      this.info = res
      this.anoko = res[0]
    })
    .catch(err => {
      console.log(err);
      console.log("失敗しました");
    })
    fetch('http://localhost:3000/data')
    .then(res => {
      console.log('成功だぁ');
      return res.json()
    })
    .then(res => {
      console.log('データベースに接続成功');
      console.log(res);
      this.id = res[0][0]
      this.name = res[0][1]
    })
    .catch(err => {
      console.log('失敗')
      console.log(err);
    })
    fetch('http://localhost:3000/database')
    .then(res =>  {
      console.log('sucess');
      return res.json()
    })
    .then(res => {
      console.log(res[0])
      this.number = res[0].id
      this.brand = res[0].name
    })
    .catch(err => {
      console.log(err);
      console.log("失敗しました");
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
