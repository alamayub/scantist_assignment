<template>
  <div id="app">
    <Navbar />
    <div class="main">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { 
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main { flex: 1; }
}

.container {
  max-width: 1060px;
  padding: 12px;
  margin: 0 auto;
}

</style>
