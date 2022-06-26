<template>
  <b-message
    v-if="errors.length"
    title="Whoops! Something went wrong."
    closable
    :duration="4000"
    type="is-danger"
    :model-value="modelValue"
    @update:modelValue="value => $emit('update:modelValue', value)"
    aria-close-label="Close message">
    <ul>
      <li v-for="(error,key) in errors" :key="key">{{error}}</li>
    </ul>
  </b-message>
</template>

<script>
export default {
  name: "AppError",
  props: {
    errors: {
      type: Array,
      default() {
        return []
      }
    },
    modelValue: {
        type: Boolean
    }
  }

}
</script>
