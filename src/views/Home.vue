<template>
  <v-app>
    <NavBar/>
    <v-main>
      <v-row justify="center" align="center">
        <v-col cols="12" md="5">
          <div class="px-3">
            <v-avatar color="indigo" size="300">
              <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQEuDC43yC00rQ/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=0SAZh5c7MWcoymKfZwAOOoZFYgvJ16n2V1EMlQ9Ed_8"
                  alt="John"
              >
            </v-avatar>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div class="text-left px-1">
            <v-row>
              <v-col cols="12">
                <div >
                  Hi! My name is Yunzhe (蕴喆) Liu, I go by Josh.
                </div>
              </v-col>
              <v-col cols="12">
                <div>
                  I am a graduate CS student at University of Southern California.
                </div>
              </v-col>
              <v-col cols="12">
                <div>
                  I am eager to learn and passionate to coding.
                </div>
              </v-col>
              <v-col cols="12">
                <div>
                  I am looking for internship and full time job opportunity of Software Engineering that supports CPT
                  and OPT.
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-divider inset class="ma-5"/>
      <v-row justify="center" align="center" no-gutters>
        <v-col cols="12" md="2">
          <v-btn depressed rounded text>
            Contact Me:
          </v-btn>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn href="https://www.linkedin.com/in/yunzheliu/"
                 elevation="5"
                 rounded
                 class="ma-2 white--text blue lighten-2"
          >
            <v-icon left dark>mdi-linkedin</v-icon>
            LINKEDIN


          </v-btn>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn class="ma-2 white--text grey darken-3" href="https://github.com/Haizhepi"
                 elevation="5"
                 dark rounded>
            <v-icon dark left>mdi-github</v-icon>
            GITHUB
          </v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn class="ma-2 white--text red accent-1" color="black" dark rounded elevation="5"
          >
            <v-icon dark left>mdi-gmail</v-icon>
            <a class="link-style" href="mailto:yunzheliu1998@gmail.com">yunzheliu1998@gmail.com</a>
          </v-btn>
        </v-col>
      </v-row>

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

<style scoped>
.link-style {
  color: #FFFFFF;
}
</style>
