<template>
  <v-container>
    <v-form @submit.prevent="submitOrder" ref="form">
      <h2>Confirmer la Commande</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="orderDetails.firstName" label="Prénom" outlined required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="orderDetails.lastName" label="Nom" outlined required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="orderDetails.email" label="Email" type="email" outlined required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="orderDetails.address" label="Adresse de livraison" outlined required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="orderDetails.postalCode" label="Code Postal" outlined required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="orderDetails.province"
            :items="provinces"
            label="Province"
            item-text="name"
            item-value="abbr"
            outlined
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="orderDetails.phone" label="Numéro de Téléphone" outlined required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="orderDetails.paymentMethod"
            :items="paymentMethods"
            label="Méthode de Paiement"
            outlined
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-btn color="primary" type="submit" large>Soumettre la Commande</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OrderCheckout',
  data() {
    return {
      orderDetails: {
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        province: '',
        phone: '',
        email: '',
        paymentMethod: ''
      },
      provinces: [
        { name: "Alberta", abbr: "AB" },
        { name: "Colombie-Britannique", abbr: "BC" },
        { name: "Manitoba", abbr: "MB" },
        { name: "Nouveau-Brunswick", abbr: "NB" },
        { name: "Terre-Neuve-et-Labrador", abbr: "NL" },
        { name: "Nouvelle-Écosse", abbr: "NS" },
        { name: "Ontario", abbr: "ON" },
        { name: "Île-du-Prince-Édouard", abbr: "PE" },
        { name: "Québec", abbr: "QC" },
        { name: "Saskatchewan", abbr: "SK" },
        { name: "Territoires du Nord-Ouest", abbr: "NT" },
        { name: "Nunavut", abbr: "NU" },
        { name: "Yukon", abbr: "YT" }
      ],
      paymentMethods: [
        "Carte de crédit",
        "Débit",
        "PayPal",
        "Bitcoin"
      ]
    };
  },
  methods: {
    submitOrder() {
      axios.post('/api/orders', this.orderDetails)
      .then(() => {
        alert('Commande réussie!');
        this.$router.push('/');
      })
      .catch(error => {
        console.error('Erreur lors de la soumission de la commande', error);
        alert('Erreur lors de la soumission de la commande');
      });
    }
  }
}
</script>

<style scoped>
</style>
