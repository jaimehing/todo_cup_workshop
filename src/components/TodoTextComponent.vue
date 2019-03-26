<template>
  <input type="text" placeholder="e.g. Get the laundry" class="TodoInput" @input="handleInput">
</template>

<script>
export default {
  props: {
    todoText: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.currentTarget.value);
    },
  },
};
</script>
