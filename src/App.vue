<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  h1 {
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
