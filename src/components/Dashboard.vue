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
            <th>Preview</th>
          </tr>
          <tr v-for="(news, index) in newsAll" :key="index">
            <td>{{number++}}</td>
            <td>{{news.title}}</td>
            <td>{{news.date}}</td>
            <td> <a href="#" @click="editNews(index)"><img src="../assets/edit.svg" alt=""></a>   </td>
            <td> <a href="#" @click="delNews(index)"><img src="../assets/delete.svg" alt=""></a>  </td>
            <td> <router-link to="ShowNews"><a href="#" @click="readNews(index)"><img src="../assets/show.svg" alt=""></a></router-link> </td>
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
      number: 1
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
      'removeNews',
      'readNews'
    ]),
    delNews (index) {
      this.$swal({
        title: 'Are you sure?',
        text: 'ลบโพส !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete it!'
      }).then((result) => {
        if (result.value) {
          this.$swal(
            'ลบโพส !',
            'success'
          )
          this.removeNews(index)
          this.$router.push({path: '/Dashboard'})
        }
      })
    },
    editNews (index) {
      this.readNews(index)
      this.$swal({
        title: 'Are you sure?',
        text: 'แก้ไขโพส !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Edit Post!'
      }).then((result) => {
        if (result.value) {
          this.$router.push({path: '/UpdateNews'})
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
