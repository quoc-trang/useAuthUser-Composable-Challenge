<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useAuthUser } from "./composables/useAuthUser";
const { user } = useAuthUser();
</script>
<template>
  <div class="page">
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>
</template>
