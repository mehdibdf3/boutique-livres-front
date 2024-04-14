<template>
    <v-app>
      <NavBar />
      <v-main style="padding-top: 190px;">
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  
  
  <script>
  import NavBar from './components/NavBar.vue';
  
  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
  </script>
  
  <style>
  /* Styles globaux */
  </style>
  