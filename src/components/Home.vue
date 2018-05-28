<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>News</h1>
      </div>
    </div>
    <div class="row slide">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="" alt="First slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="showNews row">
      <div class="col-4 px-1 pb-1" v-for="(news, index) in newsAll" :key="index">
        <div class="card" style="width: 100%;">
          <img class="card-img-top" :src="news.img" style="height:200px; width:auto;">
          <div class="card-body">
            <h5 class="card-title">{{news.title}}</h5>
            <div class="card-text" v-html="news.content.substr(0,40)"></div>
            <router-link to='ShowNews'><a href="#" class="btn btn-primary " @click="readNews(index)">Read More</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created () {
    this.showNews()
  },
  computed: {
    ...mapGetters([
      'newsAll'
    ])
  },
  methods: {
    ...mapActions([
      'showNews',
      'readNews'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
