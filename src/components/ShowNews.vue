<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        {{id}}
        <img :src="newsAll[id].img" width="100%" height="300px">
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-6">
        <h1>{{newsAll[id].title}}</h1>
      </div>
      <div class="col-6">
        <h5>วันที่ : {{newsAll[id].date}}</h5>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-8" v-html="newsAll[id].content">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'showNews',
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  computed: {
    ...mapGetters([
      'newsAll'
    ])
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 600px;
    height: auto;
  }
</style>
