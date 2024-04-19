<template>
  <div id="contact">
    <v-container
      fluid
      style="
        background: linear-gradient(
          278.71deg,
          #f67e08 -19.92%,
          #eb8b27 18.18%,
          #abd9d9 103.91%
        );
      "
    >
      <h1 class="text-uppercase text-center text-white">Contact us</h1>
      <div class="mt-4">
        <h1 class="text-uppercase text-center text-black text-h5">
          Address: Banda street, Cameo building at the ground floor.
        </h1>
      </div>
      <div class="mt-8">
        <h1 class="text-uppercase text-center text-black text-overline">
          Call Us: +25471235678 (Mon-Sat, 8am-7pm)
        </h1>
      </div>
      <div class="mt-8">
        <h1 class="text-uppercase text-center text-black text-overline">
          Email: CAKE@BAKERSPOINT.co.ke
        </h1>
      </div>
      <Vue3Lottie
        animationLink="https://assets9.lottiefiles.com/packages/lf20_bt7iqzns.json"
        style="width: 100%; height: 400px; border-radius: 20px"
        backgroundColor="transparent"
        speed="1.2"
      />

      <!-- <v-row no-gutters class="mt-4">
        <v-col cols="12" md="6">
          <Vue3Lottie
            animationLink="https://assets9.lottiefiles.com/packages/lf20_bt7iqzns.json"
            style="width: 100%; height: 400px; border-radius: 20px"
            playOnHover="true"
            pauseOnHover="true"
            backgroundColor="transparent"
            speed="1.2"
            loop="true"
          />
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-card class="mt-6" flat color="transparent">
            <v-card-title class="text-center">
              <h1 class="text-uppercase text-center text-white text-overline">
                Send us a message
              </h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Email"
                  outlined
                  color="white"
                  class="text-white"
                ></v-text-field>
                <v-textarea
                  label="Message"
                  outlined
                  color="white"
                  class="text-white"
                  rows="3"
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="white" text> Send </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
export default {
  components: {
    Vue3Lottie,
  },
};
</script>

<style></style>
