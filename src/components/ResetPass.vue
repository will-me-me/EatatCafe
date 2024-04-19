<template>
  <v-row justify="center">
    <v-dialog v-model="user.resetPassDialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Reset Your Password</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  v-model="user.email"
                  :rules="user.emailRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="user.password"
                  hint="At least 8 characters"
                  label="Password*"
                  :rules="user.passwordRules"
                  required
                  :append-icon="
                    user.showresetLoginPassword ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  :type="user.showresetLoginPassword ? 'text' : 'password'"
                  @click:append="
                    user.showresetLoginPassword = !user.showresetLoginPassword
                  "
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="user.resetPassDialog = false"
          >
            Close
          </v-btn>
          <v-btn color="teal darken-1" text @click="passreset">
            Reset Password
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { UseuserStore } from "@/store/UserStore";

const user = UseuserStore();

const passreset = () => {
  let newuserpass = {
    email: user.email,
    password: user.password,
  };
  user.PasswordRest(newuserpass);
};
</script>

<style></style>
