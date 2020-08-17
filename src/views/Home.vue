<template>
  <v-app>
    <NavBar/>
    <v-main>

    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
export default {
  name: 'Home',
  components: {
    NavBar,
  }
}
</script>
