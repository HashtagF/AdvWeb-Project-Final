<template>
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark mb-5">
    <router-link to="/"><a class="navbar-brand" href="#">Web Project</a></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse show" id="navbarsExample06" style="">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#" @click="setFilter('')">ข่าวทั้งหมด </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="setFilter('ข่าวกีฬา')">ข่าวกีฬา</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="setFilter('ข่าวบันเทิง')">ข่าวบันเทิง</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="setFilter('ข่าวการเมือง')">ข่าวการเมือง</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="setFilter('ข่าวเกมส์')">ข่าวเกมส์</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="setFilter('ข่าวต่างประเทศ')">ข่าวต่างประเทศ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="setFilter('ข่าวไอที')">ข่าวไอที</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="setFilter('อื่นๆ')">อื่นๆ</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-md-0 mr-4">
        <input class="form-control" type="text" placeholder="Search" @keyup.enter="search()" v-model="textsearch">
      </form>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      textsearch: ''
    }
  },
  created () {
    this.showNews()
  },
  computed: {
    ...mapGetters([
      'newsAll',
      'filterNews'
    ])
  },
  methods: {
    ...mapActions([
      'showNews',
      'setFilter'
    ]),
    search () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
