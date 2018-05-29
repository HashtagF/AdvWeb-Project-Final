<template>
  <footer class=" bg-secondary text-white">
    <div class="container">
      <div class="row pt-4 pb-5 mt-5">
        <div class="col-4">
          <h5>Web Project</h5>
          <p>เว็บข่าวว</p>
        </div>
        <div class="col-4">
          <h5>หมวดหมู่ข่าว</h5>
        </div>
        <div class="col-4">
          <h5>ติดต่อเรา</h5>
          Facebook : facebook.com <br>
          Twitter : twitter.com <br>
          Google Plus : plus.google.com
        </div>
      </div>
    </div>
  </footer>
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
      'showNews'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
