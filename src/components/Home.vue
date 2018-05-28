<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>News</h1>
      </div>
    </div>
    <div class="showNews row">
      <div class="col-4" v-for="(news, index) in newsAll" :key="index">
        <div class="card" style="width: 90%;">
          <img class="card-img-top" :src="news.img" style="height:200px; width:auto;">
          <div class="card-body">
            <h5 class="card-title">{{news.title}}</h5>
            <div class="card-text" v-html="news.content.substr(0,50)"></div>
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
