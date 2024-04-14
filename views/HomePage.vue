<template>
  <v-container>
    <!-- Popup de bienvenue avec effet de transition -->
    <transition name="fade" @after-enter="setTimer">
      <v-alert v-if="showWelcome" type="success" dense text class="welcome-alert">
        Bienvenue sur bibliothèque ! Découvrez notre collection de livres et bien plus encore.
      </v-alert>
    </transition>

    <!-- Liste de livres -->
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="book in books" :key="book.id">
        <v-card class="pa-3" elevation="2">
          <v-img :src="book.image || 'default-image.jpg'" height="200px" contain></v-img>
          <v-card-title>{{ book.title }}</v-card-title>
          <v-card-text>
            <div>{{ book.author }}</div>
            <div>${{ book.price.toFixed(2) }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(book)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      books: [],
      showWelcome: true // Contrôle l'affichage du popup de bienvenue
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
          this.books = []; // En cas d'erreur, videz la liste des livres
        });
    },
    addToCart(book) {
      const cartItem = this.cart.find(item => item.bookId === book.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({
          bookId: book.id,
          quantity: 1,
          title: book.title,
          price: book.price
        });
      }
      this.updateCart();
    },
    updateCart() {
      axios.post('/api/cart/update', { cart: this.cart })
        .then(response => {
          console.log('Cart updated successfully', response.data);
        })
        .catch(error => {
          console.error('Error updating cart', error);
        });
    },
    setTimer() {
      setTimeout(() => {
        this.showWelcome = false;
      }, 3000);
    }
  },
  mounted() {
  this.fetchBooks();
  setTimeout(() => {
    this.showWelcome = false;
  }, 3000);
}

}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.welcome-alert {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 80%;
}
</style>
