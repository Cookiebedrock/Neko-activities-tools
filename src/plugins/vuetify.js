import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#ff5722',
            secondary: '#795548',
            accent: '#ff9800',
            error: '#f44336',
            warning: '#ffc107',
            info: '#607d8b',
            success: '#8bc34a'
          },
        },
      },
});