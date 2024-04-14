<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <router-link to="/" class="white--text">bibliothèque</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <!-- Liens de Navigation -->
      <v-btn text :to="{ name: 'HomePage' }" class="white--text">Accueil</v-btn>
      <v-btn text :to="{ name: 'ShoppingCart' }" class="white--text">Panier</v-btn>
      <v-btn text :to="{ name: 'UserAuth' }" class="white--text">Connexion</v-btn>
      <v-btn text :to="{ name: 'AdminPanel' }" class="white--text">Panneau Admin</v-btn>
      
      <!-- Champ de recherche -->
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        single-line
        hide-details
      ></v-text-field>
  
      <!-- Bouton de déconnexion -->
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data: () => ({
      search: ''
    }),
    methods: {
      logout() {
        // Logique de déconnexion
        console.log('Déconnexion');
      }
    }
  }
  </script>
  
  <style scoped>
  .white--text {
    color: white;
    text-decoration: none;
  }
  </style>
  