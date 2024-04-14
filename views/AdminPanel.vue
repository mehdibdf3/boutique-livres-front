<template>
    <v-container>
      <h1>Panel d'Administration - Gestion des Livres</h1>
  
      <v-row>
        <!-- Formulaire pour ajouter un livre -->
        <v-col cols="12" md="6">
          <v-card class="pa-4" outlined>
            <v-form @submit.prevent="addBook">
              <h2>Ajouter un Livre</h2>
              <v-text-field label="Titre" v-model="newBook.title" required></v-text-field>
              <v-text-field label="Auteur" v-model="newBook.author" required></v-text-field>
              <v-text-field label="Prix" v-model="newBook.price" type="number" required></v-text-field>
              <v-text-field label="ISBN" v-model="newBook.isbn" required></v-text-field>
              <v-btn color="primary" type="submit">Ajouter Livre</v-btn>
            </v-form>
          </v-card>
        </v-col>
  
        <!-- Formulaire pour supprimer un livre -->
        <v-col cols="12" md="6">
          <v-card class="pa-4" outlined>
            <v-form @submit.prevent="deleteBook">
              <h2>Supprimer un Livre</h2>
              <v-text-field label="Titre" v-model="bookToDelete.title" required></v-text-field>
              <v-text-field label="Auteur" v-model="bookToDelete.author" required></v-text-field>
              <v-btn color="red" type="submit">Supprimer Livre</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AdminPanel',
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          price: '',
          isbn: ''
        },
        bookToDelete: {
          title: '',
          author: ''
        }
      };
    },
    methods: {
      addBook() {
        axios.post('/api/books', this.newBook)
          .then(() => {
            alert("Livre ajouté avec succès");
            this.newBook = { title: '', author: '', price: '', isbn: '' }; // Reset form
          })
          .catch(error => {
            console.error('Erreur lors de l\'ajout du livre:', error);
            alert("Erreur lors de l'ajout du livre");
          });
      },
      deleteBook() {
        axios.delete(`/api/books`, { data: this.bookToDelete })
          .then(() => {
            alert("Livre supprimé avec succès");
            this.bookToDelete = { title: '', author: '' }; // Reset form
          })
          .catch(error => {
            console.error('Erreur lors de la suppression du livre:', error);
            alert("Erreur lors de la suppression du livre");
          });
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  