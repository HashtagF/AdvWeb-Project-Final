<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <img :src="newsAll[readNew].img" width="100%" height="300px">
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-6">
        <h1>{{newsAll[readNew].title}}</h1>
      </div>
      <div class="col-6">
        <h5>วันที่ : {{newsAll[readNew].date}}</h5>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-8" v-html="newsAll[readNew].content">
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
    }
  },
  computed: {
    ...mapGetters([
      'readNew',
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
