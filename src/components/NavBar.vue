<template>
  <v-app-bar
    elevation="16"
    app
    dark
    color="primary"
    class="rounded-b-xl mx-4"
  >
    <v-toolbar-title class="px-3">Josh (Yunzhe)'s Portfolio</v-toolbar-title>

    <v-spacer/>
    <v-btn text>
      MySelf
    </v-btn>
    <v-btn text>
      Education
    </v-btn>
    <v-btn text>
      Skills
    </v-btn>
    <v-btn text>
      Project
    </v-btn>
    <v-btn text>
      Blogs
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

</style>