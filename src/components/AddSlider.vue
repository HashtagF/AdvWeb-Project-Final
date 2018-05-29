<template>
  <div class="container" style="padding-top:100px;">
    <div class="row">
      <div class="col-12 text-center">
        <h1>เพิ่มรูปลง Slider</h1>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <div class="input-group ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg" >รูปที่ 1 : </span>
          </div>
          <input required type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="tslider.img1">
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="input-group ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg" >รูปที่ 2 : </span>
          </div>
          <input required type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="tslider.img2">
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="input-group ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg" >รูปที่ 3 : </span>
          </div>
          <input required type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" v-model="tslider.img3">
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-8">
        <button type="submit" class="btn btn-primary btn-block" @click="editSlider()">Update</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-danger btn-block" @click="cancelNews()">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      tslider: {
        img1: '',
        img2: '',
        img3: ''
      }
    }
  },
  created () {
    this.showSlider()
    this.tslider.img1 = this.slider.img1
    this.tslider.img2 = this.slider.img2
    this.tslider.img3 = this.slider.img3
  },
  computed: {
    ...mapGetters([
      'newsAll',
      'slider'
    ])
  },
  methods: {
    ...mapActions([
      'updateSlider',
      'showSlider'
    ]),
    cancelNews () {
      this.$swal({
        title: 'Are you sure?',
        text: 'ยกเลิกการอัพเดท !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel it!'
      }).then((result) => {
        if (result.value) {
          this.$swal(
            'ยกเลิกการอัพเดท !',
            'success'
          )
          this.$router.push({path: '/Dashboard'})
        }
      })
    },
    editSlider () {
      this.updateSlider(this.tslider)
      this.$swal({
        type: 'success',
        title: 'Success Update Slider'
      })
      this.$router.push({path: '/Dashboard'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
