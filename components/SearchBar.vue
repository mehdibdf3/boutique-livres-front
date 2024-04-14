<template>
    <input v-model="searchText" @input="search" placeholder="Rechercher un livre">
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchText: ''
      };
    },
    methods: {
      search() {
        this.$emit('search', this.searchText);
      }
    }
  }
  </script>
  