<script setup lang="ts" name="AtomInput">
import { computed } from "vue"

// props
const props = withDefaults(
  defineProps<{
    type: "text" | "password"
    modelValue: string
    validations?: string[]
  }>(),
  { validations: undefined }
)

// emits
const emit = defineEmits(["update:modelValue"])

const localValue = computed<string>({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit("update:modelValue", newValue)
  },
})
</script>

<template>
  <input class="atom-input" v-model="localValue" :type="type" />
</template>

<style scoped>
.atom-input {
  border-style: solid;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
