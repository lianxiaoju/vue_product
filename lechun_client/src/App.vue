<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import jsonp from './utils/jsonp.js'
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getData')
    // axios.get('http://localhost:3000/api/product/list').then(res => console.log(res.data))
    // jsonp('http://localhost:3000/api/product/list').then(result => {
    //   console.log(result)
    // })
    // axios.get('/api/product/list').then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style>
@import url(./static/css/reset.css);
</style>
