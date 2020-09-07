import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1769AA",
        secondary: "#00C3FF",
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: "#1769AA",
        secondary: "#00C3FF",
        accent: colors.shades.black,
        error: colors.red.accent3,
      }
    }
  }
});
