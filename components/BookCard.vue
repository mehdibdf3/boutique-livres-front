<template>
    <div class="book-card">
      <img :src="livre.image" :alt="livre.titre" class="book-image"/>
      <h3>{{ livre.titre }}</h3>
      <p>{{ livre.prix }} €</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookCard',
    props: {
      livre: Object
    }
  }
  </script>
  