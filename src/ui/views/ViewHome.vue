<script setup lang="ts" name="ViewHome">
// components
import AtomInput from "@components/atoms/inputs/AtomInput.vue"
import { ref } from "vue"

const username = ref("")
const password = ref("")
</script>

<template>
  <section>
    <AtomInput :model-value="username" type="text" />
    <AtomInput :model-value="password" type="password" />
  </section>
</template>
