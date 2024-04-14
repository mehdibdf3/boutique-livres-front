<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5">Inscription</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register" ref="form">
              <v-text-field
                label="Prénom"
                v-model="user.prenom"
                :rules="nameRules"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Nom"
                v-model="user.nom"
                :rules="nameRules"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Nom d'utilisateur"
                v-model="user.username"
                :rules="usernameRules"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="user.email"
                :rules="emailRules"
                type="email"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Mot de passe"
                v-model="user.motDePasse"
                :rules="passwordRules"
                type="password"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Date de naissance"
                v-model="user.dateDeNaissance"
                type="date"
                outlined
                required
              ></v-text-field>
              <v-btn color="primary" type="submit" :disabled="!valid">S'inscrire</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <p>Déjà inscrit? <router-link to="/auth">Connectez-vous</router-link></p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogue pour confirmation d'inscription -->
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-card-title class="text-h5">Inscription réussie</v-card-title>
        <v-card-text>Vous allez être redirigé vers la page d'accueil.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeDialog">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        nom: '',
        prenom: '',
        email: '',
        motDePasse: '',
        dateDeNaissance: '',
        username: ''
      },
      valid: true,
      dialog: false,
      nameRules: [
        v => !!v || 'Ce champ est requis',
        v => (v && v.length >= 2) || 'Le nom doit contenir au moins 2 caractères'
      ],
      usernameRules: [
        v => !!v || 'Ce champ est requis',
        v => (v && v.length >= 3) || 'Le nom dutilisateur doit contenir au moins 3 caractères'
      ],
      emailRules: [
        v => !!v || 'Ladresse e-mail est requise',
        v => /.+@.+\..+/.test(v) || 'Ladresse e-mail doit être valide'
      ],
      passwordRules: [
        v => !!v || 'Le mot de passe est requis',
        v => (v && v.length >= 6) || 'Le mot de passe doit contenir au moins 6 caractères'
      ],
      loading: false,
      errorMessage: ''
    };
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post('/api/register', this.user)
          .then(response => {
            this.loading = false;
            this.dialog = true; // Afficher le dialogue de succès
            console.log('Inscription réussie, données de lutilisateur:', response.data);
            setTimeout(() => {
              this.closeDialog();
              this.$router.push('/'); // Redirection vers la HomePage après 3 secondes
            }, 3000);
          })
          .catch(error => {
            this.loading = false;
            this.errorMessage = error.response && error.response.data ? error.response.data.message : 'Une erreur est survenue lors de linscription.';
            console.error('Erreur lors de linscription:', this.errorMessage);
          });
      } else {
        console.log("Validation du formulaire échouée.");
      }
    },
    closeDialog() {
      this.dialog = false;
    }
  }
}
</script>


