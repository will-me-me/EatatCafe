<template>
  <div class="mt-2" id="menu" style="padding: 35px; border-radius: 10px">
    <h1
      class="py-4"
      style="
        font-size: 45px;
        line-height: 25px;
        text-align: left;
        color: #f67e08;
        text-transform: uppercase;
      "
    >
      menu
    </h1>
    <v-row>
      <v-col v-for="menu in menus" :key="menu" cols="12" md="3" sm="6">
        <v-card
          class="mx-auto"
          max-width="500"
          hover
          flat
          shaped
          style="
            border-radius: 10px !important;
            box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #f5f5f5;
          "
        >
          <v-img
            height="300px"
            style="border-radius: 5px"
            cover
            contain
            aspect-ratio="1.7"
            :src="menu.image"
            :lazy-src="menu.image"
          >
          </v-img>

          <v-card-title
            class="text-center text-capitalize"
            style="color: #f67e08"
            >{{ menu.name }}</v-card-title
          >

          <v-card-text class="mt-4">
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="20"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              Baba decon delli {{ menu.name }}
            </div>

            <div>
              {{ menu.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions class="justify-center">
            <p
              style="
                font-size: 15px;
                font-weight: 200;
                color: #e71212;
                text-transform: uppercase;
              "
            >
              <span class="text--primary font-weight-bold">
                KSH {{ menu.price }}</span
              >
            </p>
            <!-- <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
    menus: [
      {
        name: "chapatis",
        image:
          "https://t4.ftcdn.net/jpg/03/76/16/99/360_F_376169937_Bz1sBXgfnkIub5iDCAynsnF8jKng3Qa4.webp",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        price: 20,
      },
      {
        name: "Cupcakes",
        image:
          "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D",
        description:
          "Best cupcakes that you will ever taste in your life. We have the best cupcakes in the world.",
        price: 20,
      },
      {
        name: "Pastries",
        image:
          "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFzdHJpZXN8ZW58MHx8MHx8fDA%3D",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        price: 10,
      },
      {
        name: "Bread",
        image:
          "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWR8ZW58MHx8MHx8fDA%3D",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        price: 50,
      },
      {
        name: "cookies",
        image:
          "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
        price: 20,
      },
      {
        name: "birthday cakes",
        image:
          "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlydGhkYXklMjBjYWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "sweet and delicious cakes for your birthday party made to your taste and preference.",
        price: 1200,
      },
      {
        name: "wedding cakes",
        image:
          "https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNha2VzfGVufDB8fDB8fHww",
        description:
          "sweet and delicious cakes for your wedding party made to your taste and preference.",
        price: 1200,
      },
      {
        name: "mandazi",
        image:
          "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/69e427ab880d491d8aba5877bb82d975/OO_Mandazi.jpg?resize=1200:*",
        description:
          "sweet and delicious cakes for your wedding party made to your taste and preference.",
        price: 10,
      },
    ],
  }),
};
</script>

<style></style>
