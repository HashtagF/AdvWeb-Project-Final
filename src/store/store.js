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
    readNew: ''
  },
  getters: {
    news: state => state.news,
    newsAll: state => state.newsAll,
    readNew: state => state.readNew
  },
  mutations: {
    setNews (state, news) {
      state.news = news
    },
    setnewsAll (state, newsAll) {
      state.newsAll = newsAll
    },
    setreadNew (state, readNew) {
      state.readNew = readNew
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
    readNews (context, key) {
      db.ref('readNews').set(key)
      context.commit('setreadNew', key)
    },
    removeNews (context, key) {
      db.ref('News').child(key).remove()
    },
    updateNews (context, news) {
      db.ref('News').child(context.state.readNew + '/title').set(news.title)
      db.ref('News').child(context.state.readNew + '/date').set(news.date)
      db.ref('News').child(context.state.readNew + '/img').set(news.img)
      db.ref('News').child(context.state.readNew + '/content').set(news.content)
    }
  }
})
