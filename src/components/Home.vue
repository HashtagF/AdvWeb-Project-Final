<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>News (ข่าว)</h1>
      </div>
    </div>
    <div class="row slide justify-content-center mb-4 mt-4">
      <div class="col-10">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="../assets/s1.svg" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../assets/s2.svg" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../assets/s3.svg" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="showNews row">
      <div class="col-4 px-1 pb-1" v-for="(news, index) in newsAll" :key="index">
        <div class="card" style="width: 100%; height:400px;">
          <img class="card-img-top" :src="news.img" style="height:200px; width:auto;">
          <div class="card-body">
            <h5 class="card-title">{{news.title}}</h5>
            <div class="card-text" v-html="news.content.substr(0,40)"></div>
            <router-link :to="{ name: 'ShowNews', params: {id: index} }"><a href="#" class="btn btn-primary float-right" >Read More</a></router-link>
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
      'newsAll',
      'filterNews'
    ]),
    sportNews () {
      return this.filterNews('ข่าวกีฬา')
    }
  },
  methods: {
    ...mapActions([
      'showNews'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
