<template>
  <div class="container text-center">
    <h5>Facebook Comment</h5>
    <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="10" data-width="700"></div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  created () {
    (function (d, s, id) {
      var js = d.getElementsByTagName(s)[0]
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v3.0&appId=501895686847022&autoLogAppEvents=1'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }
}
</script>
