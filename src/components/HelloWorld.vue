<template>
  <div style="position: absolute; top: 0; left: 0; width: 100%">
    <div>
      <v-carousel
        class="hero-carusel"
        height="1000"
        hide-delimiter-background="hide-delimiter-background"
        :show-arrows="true"
      >
        <v-carousel-item v-for="(item, i) in user.itemsCarusel" :key="i">
          <div
            :style="{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${item.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              opacity: '1',
              backgroundPosition: 'center center',
            }"
          >
            <v-container
              class="mt-16"
              align="center"
              style="margin-top: 200px !important"
            >
              <h1
                class="font-weight-black text--primary text-capitalize"
                style="
                  color: rgb(255, 188, 100);
                  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
                  font-family: 'Cabin Sketch';
                "
              >
                <span style="font-size: 85px"
                  >smart

                  <span class="typed-text">{{ user.typeValue }}</span>
                  <span class="blinking-cursor">|</span>
                  <span class="cursor" :class="{ typing: typeStatus }"
                    >&nbsp;</span
                  >
                </span>
              </h1>
              <br />
              <p style="font-family: 'Cabin Sketch'; font-size: 55px">
                <span
                  class="font-weight-black text--primary text-capitalize"
                  style="
                    color: rgb(241, 241, 240);
                    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
                  "
                >
                  <span style="">{{ item.caption }}</span>
                </span>
              </p>
              <br />
              <v-btn
                v-if="user.isLoggedIn === true"
                flat="flat"
                rounded
                style="background-color: #f67e08"
                class="mt-8"
                depressed
                elevation="60"
                x-large="x-large"
                @click="OpenOrderDialog"
              >
                <span style="color: aliceblue"> order now </span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                flat="flat"
                rounded
                style="background-color: #f67e08"
                class="mt-8"
                depressed
                elevation="60"
                x-large="x-large"
                to="/login/register"
              >
                <span style="color: aliceblue"> login/Register </span>
              </v-btn>
            </v-container>
            <br />
            <h1
              class="text-center text-capitalize hidden-sm-and-down font-weight-black"
              style="
                color: rgb(228, 224, 219);
                font-family: 'Cabin Sketch';
                font-size: 55px;
                text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
              "
            >
              all the cakes you need here
            </h1>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <options-cakes />
    <oreder-dialog />
  </div>
</template>

<script setup>
import OrederDialog from "./OrederDialog.vue";
import OptionsCakes from "./OptionsCakes.vue";
import { UseuserStore } from "@/store/UserStore";
import { onMounted } from "vue";

const user = UseuserStore();

// const getAllItems = () => {
//   return items;
// };

const OpenOrderDialog = () => {
  // alert("OpenOrderDialog");
  user.dialog = true;
};

const getcurrentuser = () => {
  user.fetchCurrentUser();
};

onMounted(() => {
  getcurrentuser();

  setTimeout(typeText, user.newTextDelay + 200);
  // getAllItems();
});

const typeText = () => {
  if (
    user.charIndex < user.displayTextArray[user.displayTextArrayIndex].length
  ) {
    if (!user.typeStatus) user.typeStatus = true;
    user.typeValue += user.displayTextArray[user.displayTextArrayIndex].charAt(
      user.charIndex
    );
    user.charIndex += 1;
    setTimeout(typeText, user.typingSpeed);
  } else {
    user.typeStatus = false;
    setTimeout(eraseText, user.newTextDelay);
  }
};

const eraseText = () => {
  if (user.charIndex > 0) {
    if (!user.typeStatus) user.typeStatus = true;
    user.typeValue = user.displayTextArray[
      user.displayTextArrayIndex
    ].substring(0, user.charIndex - 1);
    user.charIndex -= 1;
    setTimeout(eraseText, user.erasingSpeed);
  } else {
    user.typeStatus = false;
    user.displayTextArrayIndex += 1;
    if (user.displayTextArrayIndex >= user.displayTextArray.length)
      user.displayTextArrayIndex = 0;
    setTimeout(typeText.typingSpeed + 1000);
  }
};
</script>

<style>
.carusel-image {
  position: relative;

  rotate: 0deg;
}
.carusel-image img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.carousel-div {
  height: 1000px;
  top: 151px;
}

.mdi-circle::before {
  color: transparent !important;
  border: 2px solid #f67e08 !important;
  border-radius: 50% !important;
  transition: border 0.3s;
}
.mdi-circle:hover::before {
  border: 2px solid #094fb9 !important;
}
</style>
