<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Edit Post</h1>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-6">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">หัวข้อข่าว</span>
          </div>
          <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value="" v-model="News.title">
        </div>
      </div>
      <div class="col-2">
        <datepicker v-model="News.date"></datepicker>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-12">
        <vue-editor v-model="News.content"></vue-editor>
      </div>
      <div class="col-12 pt-2">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">ภาพปกข่าว</span>
          </div>
          <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="News.img">
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-8">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="editNews()">Update</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-danger btn-lg btn-block" @click="cancelNews()">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'
import datepicker from 'vue-date'
export default {
  name: 'editPost',
  data () {
    return {
      News: {
        title: '',
        content: '',
        img: '',
        date: ''
      }
    }
  },
  created () {
    this.showNews()
    this.News.title = this.newsAll[this.readNew].title
    this.News.content = this.newsAll[this.readNew].content
    this.News.img = this.newsAll[this.readNew].img
    this.News.date = this.newsAll[this.readNew].date
  },
  computed: {
    ...mapGetters([
      'readNew',
      'newsAll'
    ])
  },
  methods: {
    ...mapActions([
      'updateNews',
      'showNews'
    ]),
    editNews () {
      this.$swal({
        type: 'success',
        title: 'Success Post'
      })
      this.updateNews(this.News)
      this.$router.push({path: '/Dashboard'})
    },
    cancelNews () {
      this.$swal({
        title: 'Are you sure?',
        text: 'ยกเลิกการแก้ไข !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      }).then((result) => {
        if (result.value) {
          this.$swal(
            'ยกเลิกการแก้ไข !',
            'success'
          )
          this.$router.push({path: '/Dashboard'})
        }
      })
    }
  },
  components: {
    VueEditor,
    datepicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
