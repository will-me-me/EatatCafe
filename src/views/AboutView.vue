<template>
  <div class="about">
    <h1>There are {{ user.totalUsers }} users in the database</h1>
    <br />
    <h1>There are {{ user.totalOrders }} orders in the database</h1>
    <br />
    {{ user.orders }}
    <h1>This is an about page</h1>

    {{ user.users }}

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatibus, quibusdam, quia, voluptatem voluptatum quod dolorum
      voluptates quos quas quidem voluptate. Quisquam voluptatibus, quibusdam,
      quia, voluptatem voluptatum quod dolorum voluptates quos quas quidem
      voluptate.
    </p>
  </div>
</template>
<script setup>
import { UseuserStore } from "@/store/UserStore";
import { onMounted } from "vue";

const user = UseuserStore();

const getUsers = async () => {
  user.fetchUsers();
};
const getTOtalUsers = async () => {
  user.fetchTotalUsers();
};

const getTotalOrders = async () => {
  user.fetchTotalOrders();
};
const getOrders = async () => {
  user.fetchOrders();
};
onMounted(() => {
  getUsers();
  getTOtalUsers();
  getTotalOrders();
  getOrders();
});
</script>
