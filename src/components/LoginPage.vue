<template>
  <v-container justify-center align-center class="mt-12">
    <v-card class="mx-auto" max-width="500" elevation="">
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span color="teal">{{ user.currentTitle }}</span>
        <!-- <v-spacer></v-spacer>
        <v-icon>
          {{ user.currentIcon }}
        </v-icon> -->
        <!-- <v-avatar
            color="primary lighten-2"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar> -->
      </v-card-title>
      <v-divider></v-divider>

      <v-window v-model="user.step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              outlined
              filled
              v-model="user.email"
              label="Email"
              :rules="user.emailRules"
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              This is the email you will use to login to your account
            </span>
            <v-text-field
              v-model="user.firstname"
              :rules="user.userNameRules"
              label="First Name"
            ></v-text-field>
            <v-text-field
              v-model="user.lastname"
              :rules="user.userNameRules"
              label="Last Name"
            ></v-text-field>
            <vue-tel-input
              v-model="user.phoneNumber"
              :inputOptions="user.kenyaInputOptions"
            ></vue-tel-input>
            <p v-if="user.isValidPhoneNumber">
              Selected Phone Number: {{ user.phoneNumber }}
            </p>
            <p v-else class="text-caption" style="color: red">
              Invalid phone number. Please start with +254.
            </p>
            <v-text-field
              v-model="user.password"
              hint="At least 8 characters"
              :rules="user.passwordRules"
              label="Password"
              required
              prepend-icon="mdi-lock"
              :append-icon="user.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="user.showPassword ? 'text' : 'password'"
              @click:append="user.showPassword = !user.showPassword"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              hint="At least 8 characters"
              label="Confirm Password"
              required
              v-model="user.confirmPassword"
              :type="user.showPassword ? 'text' : 'password'"
              @click:append="user.showPassword = !user.showPassword"
              :append-icon="user.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[
                (v) => !!v || 'Confirm password is required',
                (v) => v === user.password || 'Password does not match',
              ]"
            ></v-text-field>
          </v-card-text>
        </v-window-item>
        <!-- login window -->
        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              v-model="user.email"
              :rules="user.emailRules"
              label="Email"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              hint="At least 8 characters"
              :rules="user.passwordRules"
              label="Password"
              required
              :append-icon="user.showLoginPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="user.showLoginPassword ? 'text' : 'password'"
              @click:append="user.showLoginPassword = !user.showLoginPassword"
            ></v-text-field>

            <span class="text-caption grey--text text--darken-1">
              Please enter a password for your account
            </span>
          </v-card-text>
        </v-window-item>

        <!-- <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
            <span class="text-caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item> -->
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="user.step === 1" text @click="user.step--">
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="user.step === 2"
          color="teal"
          depressed
          @click="user.step++"
        >
          Login
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn
          v-show="user.step === 1"
          color="primary"
          depressed
          @click="RegisterUser"
          :disabled="!user.validForm"
        >
          Register
        </v-btn>
        <v-btn
          v-show="user.step === 2"
          color="primary"
          depressed
          @click="UserLogin"
        >
          Login
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-actions v-show="user.step === 2">
        <v-btn color="red accent-1" text @click="user.openResetDialog">
          <p class="text-decoration-underline">forgotten password?</p>
        </v-btn>
      </v-card-actions>
    </v-card>
    <reset-pass />
  </v-container>
</template>

<script setup>
import { UseuserStore } from "@/store/UserStore";
import ResetPass from "./ResetPass.vue";
import { onMounted } from "vue";
// import { onMounted } from "vue";
const user = UseuserStore();

const validatePhoneNumber = (phoneNumber) => {
  // Check if the phone number starts with '+254'
  return phoneNumber.startsWith("+254") && phoneNumber.length > 13;
};

const UserLogin = () => {
  // user.step = 2;

  let userIn = {
    email: user.email,
    password: user.password,
  };
  user.loginUser(userIn);
};

// const OpenresetDialogs = () => {
//   user.openResetDialog();
// };

const RegisterUser = () => {
  let userToAdd = {
    first_name: user.firstname,
    last_name: user.lastname,
    email: user.email,
    password: user.password,
    confirm_password: user.confirmPassword,
    phone: user.phoneNumber,
  };
  user.registerUser(userToAdd);
  user.clearInputs();
  user.step++;
};

onMounted(() => {
  validatePhoneNumber(user.phoneNumber);
});

// export default {
//   data: () => ({
//     step: 1,
//     phoneNumber: "",
//     kenyaInputOptions: {
//       preferredCountries: ["ke"],
//       placeholderNumberType: "MOBILE",
//       onlyCountries: ["ke"],
//       placeholder: "+254",
//     },
//     isValidPhoneNumber: true,
//   }),
//   watch: {
//     phoneNumber(newPhoneNumber) {
//       this.isValidPhoneNumber = this.validatePhoneNumber(newPhoneNumber);
//     },
//   },
//   methods: {
//     validatePhoneNumber(phoneNumber) {
//       // Check if the phone number starts with '+254'
//       return phoneNumber.startsWith("+254") && phoneNumber.length > 13;
//     },
//   },

//   computed: {
//     currentTitle() {
//       switch (this.step) {
//         case 1:
//           return "Sign-up";
//         case 2:
//           return "Create a password";
//         default:
//           return "Account created";
//       }
//     },
//   },
// };
</script>

<style></style>
