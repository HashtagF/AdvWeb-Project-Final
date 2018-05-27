<template>
  <div class="container">
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Input',
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      'inputProduct'
    ]),
    addProduct () {
      this.inputProduct(this.product)
      this.product.name = ''
      this.product.price = ''
      this.product.count = ''
      this.product.img = ''
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
