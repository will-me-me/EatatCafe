<template>
  <div
    class="options-cakes"
    style="border-radius: 10px; margin-top: 0px !important; opacity: 1"
  >
    <v-container
      class="mt-14"
      style="border-radius: 10px; border: 3px solid #e2bb95"
    >
      <v-item-group active-class="primary">
        <v-container>
          <v-row>
            <v-col v-for="n in 3" :key="n" cols="12" md="4">
              <v-item v-slot="{ active }">
                <v-card
                  class="d-flex align-center"
                  height="130"
                  color="#E2BB95"
                  hover
                  outlined
                >
                  <v-scroll-y-transition>
                    <div v-if="active" class="text-h2 flex-grow-1 text-center">
                      Active
                    </div>
                  </v-scroll-y-transition>
                  <v-card-text
                    class="text-center text-uppercase font-weight-bold text-h5"
                    style="
                      font-size: 28px;
                      font-weight: 600;
                      line-height: 28px;
                      letter-spacing: 0.1em;
                      text-align: left;
                      color: #ffffff;
                    "
                  >
                    <b> {{ user.cakes[n - 1] }}</b>
                  </v-card-text>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-container>
    <h1 class="text-center mt-12" id="option-title">
      <span
        style="
          font-size: 40px;
          font-weight: 700;
          line-height: 30px;
          text-align: left;
          color: #410707;
          text-transform: uppercase;
          font-family: 'cabin sketch';
          text-shadow: 2px 2px 2px #252422;
        "
        >Baba Decon Delicacys</span
      >
    </h1>
    <svg
      class="svg-wave"
      style="display: block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#263036"
        fill-opacity="1"
        d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,234.7C672,224,768,224,864,240C960,256,1056,288,1152,293.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>

  <v-container
    fluid="fluid"
    style="
      border-radius: 10px;
      border: 1px solid #e2bb95;
      background-color: #e2bb95;
    "
  >
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img
          src="./src/assets/image16.png"
          height="600"
          width="100%"
          style="border-radius: 10px"
        >
        </v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6" style="margin-top: 192px !important">
        <v-card flat color="transparent">
          <v-card-title>
            <span
              style="
                font-size: 27px;
                font-weight: 600;
                line-height: 28px;
                text-align: left;
                color: #ffffff;
                text-transform: uppercase;
              "
              >Craftmanship</span
            >
          </v-card-title>
          <v-card-title class="text-center">
            <h2
              style="
                font-size: 27px;
                font-weight: 700;
                line-height: 28px;
                text-align: left;
                color: #f67e08;
                text-transform: uppercase;
              "
            >
              Welcome to bakers point
            </h2>
          </v-card-title>
          <v-card-text class="mt-4">
            <p
              class="text-justify"
              style="
                font-size: 27px;
                font-weight: 400;
                line-height: 28.5px;
                color: #000000;
                font-family: 'cabin sketch';
              "
            >
              At Bakers Point, we work with a carefully chosen, high quality
              ingredients to create hand-crafted locally-made cakes Our cakes
              are delicious, beautiful and loved by locals and visitors alike.
            </p>
          </v-card-text>
          <v-card-actions class="mt-8">
            <v-btn
              rounded
              style="font-size: 20px; background-color: #f67e08; color: #ffffff"
              @click="OpenOrderDialog"
            >
              Order Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <hero-section />
  <menu-main />
  <OurChef />
  <ContactUsVue class="mt-4" />
  <oreder-dialog v-model="user.dialog" />
  <footer-section class="mt-10" />
</template>

<script setup>
import { UseuserStore } from "@/store/UserStore";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrederDialog from "./OrederDialog.vue";
import OurChef from "./OurChef.vue";
import ContactUsVue from "./ContactUs.vue";
import HeroSection from "./HeroSection.vue";
import MenuMain from "./MenuMain.vue";
import FooterSection from "./FooterSection.vue";
import { onMounted } from "vue";

const user = UseuserStore();

const OpenOrderDialog = () => {
  user.dialog = true;
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".options-cakes", {
    scrollTrigger: {
      trigger: ".options-cakes",
      start: "top 80%",
      end: "bottom 80%",
      toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 1,
    y: 50,
  });

  gsap.from("#option-title", {
    scrollTrigger: {
      xPercent: -100,
      duration: 1,
      scrub: 20,
      trigger: "#option-title",
      start: "top 80%",
      end: "bottom 80%",
      toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 1,
    y: 50,
  });
  gsap.to("#option-title", {
    scrollTrigger: {
      x: 100,
      scrub: 20,
      trigger: "#option-title",
      start: "top 80%",
      end: "bottom 80%",
      toggleActions: "restart none none none",
    },
    opacity: 1,
    duration: 1,
    y: 50,
  });
  gsap.from(".svg-wave", {
    scrollTrigger: {
      trigger: ".svg-wave",
      start: "top 80%",
      end: "bottom 80%",
      toggleActions: "restart none none none",
    },
    opacity: 0,
    duration: 1,
    y: 50,
    rotate: 300,
  });
  const tl = gsap.timeline();
  tl.from("#option-title", {
    xPercent: -100,
    duration: 2,
    opacity: 0.5,
    y: 50,
    x: 50,
    yoyo: true,
    ease: "power1.inOut",
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: "",
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: true,
  });
});
</script>

<style scoped></style>
