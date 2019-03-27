<template>
  <form>
    <input
      type="text"
      placeholder="e.g. Get coffee"
      class="TodoInput"
      :value="locTodoText"
      @input="handleInput"
    >
    <button type="button" class="AddButton" @click="handleClick">Add</button>
  </form>
</template>

<script>
export default {
  props: {
    locTodoText: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style>
.TodoInput {
  background-color: #f1f3f4;
  border: 0;
  outline: 0;
  font-weight: 500;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  font-size: 1.2rem;
  width: 50%;
}
.AddButton {
  border: 0;
  margin-left: 1rem;
  border-radius: 8px;
  transition: 0.2s all;
  padding: 1rem 1.5rem;
  outline: 0;
  cursor: pointer;
  color: #1a73e8;
  font-size: 1rem;
}

.AddButton:hover {
  background-color: rgba(26, 115, 232, 0.039);
}

.AddButton:active {
  background-color: #cde1fb;
}
</style>
