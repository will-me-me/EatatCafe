<template>
  <div class="mt-5" id="about">
    <h1
      class="text-center"
      style="
        font-size: 40px;
        font-weight: 700;
        line-height: 30px;
        color: #f67e08;
        text-transform: uppercase;
        text-shadow: 2px 2px 2px #252422;
      "
    >
      Our chefs
    </h1>
    <v-container class="mt-5">
      <v-row>
        <v-col v-for="Chef in chefs" :key="Chef.id" cols="12" md="4">
          <v-card max-width="600">
            <v-card-title class="text-center">
              <v-avatar size="200">
                <v-img :src="Chef.image"></v-img>
              </v-avatar>
            </v-card-title>

            <!-- <v-img :src="Chef.image" height="200px"></v-img> -->
            <v-card-title
              class="mt-6 text-center text-uppercase font-weight-bold"
              tag="h1"
              style="color: #f67e08"
              >{{ Chef.name }}</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text class="text-center mt-6">{{
              Chef.description
            }}</v-card-text>
            <v-divider></v-divider>

            <v-card-actions class="mt-6">
              <v-btn color="deep-purple lighten-2" text> Hire me </v-btn>
              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition v-model="show">
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text class="text-center">
                  <v-rating
                    v-model="rating"
                    color="warning"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    large
                  ></v-rating>
                  <p class="text-uppercase mt-2 text-overline">
                    top rated chef
                  </p>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
    rating: 4.5,
    chefs: [
      {
        id: 1,
        name: "Baba Decon",
        image: "https://cdn.vuetifyjs.com/images/john.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        id: 2,
        name: "Chef wan",
        image: "https://cdn.vuetifyjs.com/images/john.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        id: 3,
        name: "Chef joe",
        image: "https://cdn.vuetifyjs.com/images/john.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  }),
};
</script>

<style></style>
