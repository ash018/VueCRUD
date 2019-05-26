<style>
  @import './assets/styles/bootstrap.min.css';
</style>

<template>
  <div id="app">
    <router-link :to="{name: 'add'}">
      <button class="btn btn-danger">Risk</button>
    </router-link>
    <router-link :to="{name: 'addfield'}">
      <button class="btn btn-primary">Field Type</button>
    </router-link>
    <router-view></router-view>
  </div>



</template>

<script>
export default {
  
}
</script>