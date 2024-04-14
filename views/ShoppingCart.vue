<template>
  <v-container>
    <div v-if="cartItems.length === 0">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h3>Votre panier est vide</h3>
          <v-btn color="primary" @click="goToBooks">Parcourir les livres</v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-list>
              <v-list-item v-for="item in cartItems" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>Quantité: {{ item.quantity }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="removeFromCart(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-btn color="primary" @click="clearCart">Vider le panier</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    fetchCartItems() {
      axios.get('/api/cart')
        .then(response => {
          this.cartItems = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du panier', error);
        });
    },
    removeFromCart(itemId) {
      axios.delete(`/api/cart/${itemId}`)
        .then(() => {
          this.fetchCartItems(); // Rafraîchir les articles du panier après suppression
        })
        .catch(error => {
          console.error('Erreur lors de la suppression de l article', error);
        });
    },
    clearCart() {
      axios.post('/api/cart/clear')
        .then(() => {
          this.cartItems = []; // Vider le tableau des articles du panier localement
        })
        .catch(error => {
          console.error('Erreur lors du vidage du panier', error);
        });
    },
    goToBooks() {
      this.$router.push({ name: 'HomePage' });
    }
  },
  mounted() {
    this.fetchCartItems();
  }
}
</script>
