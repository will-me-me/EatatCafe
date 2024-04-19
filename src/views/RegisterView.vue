<template>
  <div
    class="register"
    style="
      color: aliceblue;
      border-radius: 10px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    "
  >
    <br />
    <br />
    <br />
    <br />
    <login-page class="" />
  </div>
</template>

<script>
// import vue3lottie from "vue3-lottie";
import LoginPage from "@/components/LoginPage.vue";
export default {
  components: {
    LoginPage,
  },
};
</script>

<style></style>
