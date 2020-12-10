<template>
  <div id="app">
    <Login/>
    <Map/>
  </div>
</template>

<script>
import Map from './components/Map';
import Login from './components/Login';

export default {
  name: 'App',
  components: {
    Map,
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
