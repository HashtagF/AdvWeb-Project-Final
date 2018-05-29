<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <img :src="newsAll[id].img" class="img-fluid">
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12">
        <h1>{{newsAll[id].title}}</h1>
      </div>
      <div class="col-4">
        <h6>หมวดหมู่ข่าว : {{newsAll[id].type}}</h6>
      </div>
      <div class="col-4">
        <h6>วันที่ : {{newsAll[id].date}}</h6>
      </div>
    </div>
    <hr>
    <div class="row pt-5">
      <div class="col-12 content" v-html="newsAll[id].content">
      </div>
    </div>
    <div class="row pb-5 pt-3 text-center">
      <div class="col">
        <h6>แชร์สิ่งนี้</h6>
        <social-sharing :url="id"
                        :title="newsAll[id].title"
                        :description="newsAll[id].type"
                        hashtags="#Webproject"
                        twitter-user="vuejs"
                        inline-template>
         <div>
          <network network="email">
            <button class="btn btn-secondary" style="width:150px;"><i class="fa fa-envelope"></i> Email</button>
          </network>
          <network network="facebook">
            <button class="btn btn-primary" style="width:150px;"><i class="fa fa-facebook"></i> Facebook</button>
          </network>
          <network network="googleplus">
            <button class="btn btn-danger" style="width:150px;"><i class="fa fa-google-plu"></i> Google +</button>
          </network>
          <network network="line">
            <button class="btn btn-success" style="width:150px;"><i class="fa fa-line"></i> Line</button>
          </network>
         </div>
        </social-sharing>
      </div>
    </div>
    <div class="col-12">
      <commentView ref="comment"></commentView>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import commentView from '@/components/facebookComment'
export default {
  name: 'showNews',
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  computed: {
    ...mapGetters([
      'newsAll'
    ])
  },
  components: {
    commentView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
