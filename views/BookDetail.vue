<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-img :src="book.image" height="300px"></v-img>
          <v-card-title>{{ book.title }}</v-card-title>
          <v-card-text>
            <div>{{ book.description }}</div>
            <div><strong>Prix: </strong>{{ book.price }} €</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(book)">Ajouter au panier</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookDetail',
  props: {
    id: Number
  },
  data() {
    return {
      book: null,
      suggestions: []
    };
  },
  methods: {
    addToCart(book) {
      axios.post('/api/cart', { bookId: book.id })
        .then(() => {
          alert('Ajouté au panier');
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout au panier', error);
        });
    },
    fetchBookDetails() {
      const id = this.$route.params.id;
      axios.get(`/api/books/${id}`)
        .then(response => {
          this.book = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du livre', error);
        });
    }
  },
  mounted() {
    this.fetchBookDetails();
  }
}
</script>
