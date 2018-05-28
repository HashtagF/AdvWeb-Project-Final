<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Posts</h1>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-6">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">หัวข้อข่าว</span>
          </div>
          <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="News.title">
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
      <div class="col">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="addNews()">Post</button>
      </div>
    </div>
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
        date: ''
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
      this.inputNews(this.News)
      this.News.title = ''
      this.News.content = ''
      this.News.img = ''
      this.News.date = ''
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
