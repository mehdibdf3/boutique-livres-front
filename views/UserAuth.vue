<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Connexion</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field label="Email" v-model="user.email" outlined required></v-text-field>
              <v-text-field label="Mot de passe" v-model="user.password" type="password" outlined required></v-text-field>
              <v-btn color="primary" type="submit">Connexion</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <p>Pas encore inscrit? <router-link to="/signup">Inscrivez-vous</router-link></p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';  // Importation d'axios pour les requêtes HTTP

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      axios.post('/api/auth/login', this.user)
        .then(response => {
          // Assumer que la réponse inclut un jeton d'authentification et des informations utilisateur
          localStorage.setItem('user-token', response.data.token);  // Stocker le token reçu
          this.$router.push(response.data.user.role === 'admin' ? '/admin' : '/');  // Redirection en fonction du rôle
        })
        .catch(error => {
          console.error('Erreur d authentification', error);
          alert("Erreur de connexion : Vérifiez vos identifiants");
        });
    }
  }
}
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>
