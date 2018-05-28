<template>
  <div class="container">
    <form class="">
    <div class="row">
      <div class="col">
        <h1>Posts</h1>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-6">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg" >หัวข้อข่าว</span>
          </div>
          <input required type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="News.title">
        </div>
      </div>
      <div class="col-2">
        <datepicker v-model="News.date" required></datepicker>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-12">
        <vue-editor v-model="News.content" required></vue-editor>
      </div>
      <div class="col-12 pt-2">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">ภาพปกข่าว</span>
          </div>
          <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="News.img" required>
        </div>
      </div>
    </div>
    <div class="row pt-1">
      <div class="col-12">
        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">หมวดหมู่ข่าว</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01" v-model="News.type" required>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-8">
        <button type="submit" class="btn btn-primary btn-lg btn-block" @click="addNews()">Post</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-danger btn-lg btn-block" @click="cancelNews()">Cancel</button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'
import datepicker from 'vue-date'
export default {
  name: 'Post',
  data () {
    return {
      News: {
        title: '',
        content: '',
        img: '',
        date: '',
        type: ''
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'inputNews'
    ]),
    addNews () {
      this.$swal({
        type: 'success',
        title: 'Success Post'
      })
      this.inputNews(this.News)
      this.News.title = ''
      this.News.content = ''
      this.News.img = ''
      this.News.date = ''
      this.$router.push({path: '/Dashboard'})
    },
    cancelNews () {
      this.$swal({
        title: 'Are you sure?',
        text: 'ยกเลิกการโพส !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      }).then((result) => {
        if (result.value) {
          this.$swal(
            'ยกเลิกการโพส !',
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
