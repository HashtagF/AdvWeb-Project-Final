import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

let config = {
  apiKey: 'AIzaSyCmWtP5PY9Jezs94HjrzvfdxNIAhKcDDXU',
  authDomain: 'midtermadv.firebaseapp.com',
  databaseURL: 'https://midtermadv.firebaseio.com',
  projectId: 'midtermadv',
  storageBucket: 'midtermadv.appspot.com',
  messagingSenderId: '498210216713'
}
var firebaseApp = firebase.initializeApp(config)
let provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})
var db = firebaseApp.database()
export const store = new Vuex.Store({
  state: {
    news: {},
    newsAll: {},
    filterNews: '',
    slider: {}
  },
  getters: {
    news: state => state.news,
    newsAll: state => state.newsAll,
    filterNews: state => state.filterNews,
    slider: state => state.slider
  },
  mutations: {
    setNews (state, news) {
      state.news = news
    },
    setnewsAll (state, newsAll) {
      state.newsAll = newsAll
    },
    setfilterNews (state, filterNews) {
      state.filterNews = filterNews
    },
    setSlider (state, slider) {
      state.slider = slider
    }
  },
  actions: {
    inputNews (context, news) {
      db.ref('News').push(news)
    },
    showNews (context) {
      var ref = db.ref('News')
      ref.on('value', (snapshot) => {
        context.commit('setnewsAll', snapshot.val())
      })
    },
    removeNews (context, key) {
      db.ref('News').child(key).remove()
    },
    updateNews (context, news) {
      db.ref('News').child(news.id + '/title').set(news.title)
      db.ref('News').child(news.id + '/date').set(news.date)
      db.ref('News').child(news.id + '/img').set(news.img)
      db.ref('News').child(news.id + '/content').set(news.content)
      db.ref('News').child(news.id + '/type').set(news.type)
    },
    setFilter (context, type) {
      context.commit('setfilterNews', type)
      this.$route.push({path: '/'})
    },
    updateSlider (context, slider) {
      db.ref('Slider').child('/img1').set(slider.img1)
      db.ref('Slider').child('/img2').set(slider.img2)
      db.ref('Slider').child('/img3').set(slider.img3)
    },
    showSlider (context) {
      var ref = db.ref('Slider')
      ref.on('value', (snapshot) => {
        context.commit('setSlider', snapshot.val())
      })
    }
  }
})
