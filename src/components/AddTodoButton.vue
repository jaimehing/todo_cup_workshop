<template>
  <button type="button" class="AddButton" @click="handleClick">Add</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
