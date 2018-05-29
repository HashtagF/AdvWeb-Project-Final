<template>
  <div id="app" class="mt-0">
    <header-view/>
    <router-view/>
    <footer-view/>
  </div>
</template>

<script>
import headerView from './components/Header'
import footerView from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
      search: ''
    }
  },
  components: {
    headerView,
    footerView
  }
}
</script>

<style>
#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  /* background-image: url('../src/assets/bg.png'); */
  background-position:;
  background-attachment:fixed;
  background-size: 1920px 1080px;

}
</style>
