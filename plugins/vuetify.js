// src/plugins/vuetify.js

// Importation de la fonction createVuetify et des styles nécessaires
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

// (Optionnel) Importer les composants Vuetify que vous prévoyez d'utiliser
import * as components from 'vuetify/components';

// (Optionnel) Importer les directives Vuetify si nécessaire
import * as directives from 'vuetify/directives';

// Création de l'instance Vuetify
export default createVuetify({
  components,
  directives,
  // Vous pouvez ajouter des options de thème ici selon vos besoins
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      }
    }
  }
});
