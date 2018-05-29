<template>
  <footer class=" bg-secondary text-white">
    <div class="container">
      <div class="row pt-4 pb-5 mt-5">
        <div class="col-8">
          <weather
              api-key="f009ec86310ae59adc11ad129de6ad6c"
              title="Weather"
              latitude="14.1592175"
              longitude="101.3450957"
              language="en"
              units="uk"
              bar-color="white"
              text-color="white">
          </weather>
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
import VueWeatherWidget from 'vue-weather-widget'
import 'vue-weather-widget/dist/css/vue-weather-widget.css'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created () {
    this.showNews()
  },
  components: {
    'weather': VueWeatherWidget
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
