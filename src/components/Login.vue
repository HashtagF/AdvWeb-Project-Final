<template>
  <div class="container text-center" style="padding-top:100px;">
    <div class="row mb-5">
      <div class="col">
        <h1>Login Dashboard</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Username</span>
          </div>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="user">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Password:</span>
          </div>
          <input type="password" class="form-control" placeholder="*******" aria-label="Username" aria-describedby="basic-addon1" v-model="pass">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-3">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="Login()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pass: ''
    }
  },
  computed: {
    ...mapGetters([
      'newsAll'
    ])
  },
  methods: {
    ...mapActions([
      'showNews'
    ]),
    Login () {
      if (this.user === 'admin' && this.pass === '1234') {
        this.$router.push({path: '/Dashboard'})
      } else {
        this.$swal({
          type: 'error',
          title: 'Wrong Username or Password!!',
          text: 'Something went wrong!'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
