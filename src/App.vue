<script setup lang="ts">
// import { ref } from "vue"

// // auth - domain
// import authValidations from "@core/auth/domain/validations/LoginValidation"

// // auth - store
// import { useAuthStore } from "@store/auth"

// const userName = ref("")
// const password = ref("")
// const errorValidation = ref(false)

// // store implements
// const authStore = useAuthStore()
// const { auth } = authStore

// function handleSubmit() {
//   if (
//     authValidations.isValidUser(userName.value) &&
//     authValidations.isValidPassword(password.value)
//   ) {
//     errorValidation.value = false
//     auth(userName.value, password.value)
//   } else {
//     errorValidation.value = true
//   }
// }
</script>

<template>
  <!-- <form @submit.prevent="handleSubmit">
    <input v-model="userName" type="text" />
    <input v-model="password" type="password" />
    <button type="submit">submit</button>
    <span v-if="errorValidation"> Error de validación </span>
  </form> -->
  <RouterView />
</template>

<style scoped></style>
