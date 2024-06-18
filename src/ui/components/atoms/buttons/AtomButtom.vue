<script setup lang="ts" name="AtomButtom">
const emit = defineEmits(["click"])
</script>

<template>
  <button @click="emit('click')"><slot name="default"></slot></button>
</template>
