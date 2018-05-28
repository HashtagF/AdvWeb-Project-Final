<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-3 flaot-right">
        <router-link to="Post"><button type="button" class="btn btn-info" style="width:100%;">New Post</button></router-link>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12">
        <table class="table">
          <tr>
            <th>ลำดับ</th>
            <th>หัวข้อข่าว</th>
            <th>วันที่โพส</th>
            <th>แก้ไข</th>
            <th>ลบ</th>
          </tr>
          <tr v-for="(news, index) in newsAll" :key="index">
            <td>{{count++}}</td>
            <td>{{news.title}}</td>
            <td>{{news.date}}</td>
            <td> <img src="../assets/edit.svg" alt=""> </td>
            <td> <a href="#" @click="removeNews(index)"><img src="../assets/delete.svg" alt=""></a>  </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {
      count: '1'
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
      'removeNews'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
