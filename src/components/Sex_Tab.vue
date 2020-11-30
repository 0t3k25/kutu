<template>
<div class="container">
  <b-tabs
  active-nav-item-class="font-weight-bold text-uppercase text-primary"
  active-tab-class="font-weight-bold text-success"
  content-class="mt-3" justified
  >
    <b-tab title="全て">
      <div>
        <b-card
        img-src="https://storage.googleapis.com/my-kutu-data/Sex_Tab/category_sp_01.svg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100px;"
        >
        <b-card-text>
          <p>unnko</p>
        </b-card-text>
        </b-card>
      </div>
    </b-tab>
    <b-tab title="メンズ"><p>I'm the second tab</p></b-tab>
    <b-tab title="レディース"><p>I'm the tab with the very, very long title</p></b-tab>
  </b-tabs>


</div>
</template>

<script>

export default {
  name: 'Sex_Tab',
  data(){
    return{
      
    }
  },
  props: {
    msg: String
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color{
    color: red;
}

</style>