<template>
  <div id="app" class="container">
    <div class="row py-4">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
 import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>