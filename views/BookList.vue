<template>
    <div>
      <h1>Liste des Livres</h1>
      <v-list dense>
        <v-list-item v-for="book in books" :key="book.id" @click="openBook(book.id)">
          <v-list-item-content>
            <v-list-item-title>{{ book.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ book.author }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'BookList',
    data() {
      return {
        books: []
      };
    },
    methods: {
      fetchBooks() {
        axios.get('/api/books')
          .then(response => {
            this.books = response.data;
          })
          .catch(error => {
            console.error('Error fetching books', error);
          });
      },
      openBook(bookId) {
        // Logique pour ouvrir les détails d'un livre
        this.$router.push(`/books/${bookId}`);
      }
    },
    mounted() {
      this.fetchBooks();
    }
  }
  </script>
  
  <style scoped>
  /* Styles pour BookList */
  </style>
  