<template>
  <div class="Todo">
    <span class="TodoContent">{{todoText}}</span>
    <button type="button" class="DeleteTodoButton" @click="deleteTodo(ind)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    ind: {
      type: Number,
    },
    todoText: {
      type: String,
    },
  },
  methods: {
    deleteTodo(ind) {
      this.$emit('deleteTodo', ind);
    },
  },
};
</script>

<style lang="scss">
.Todos .Todo {
  border: 1px solid rgb(228, 228, 228);
  border-left: 4px solid #3d88e4;
  padding: 1.1rem 1.8rem;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.DeleteTodoButton {
  color: #d94a38;
  background-color: #ffffff;
  border: 0;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.2s all;
  padding: 0.8rem 1.2rem;
  outline: 0;
}

.DeleteTodoButton:hover {
  background-color: #fff3f2;
}
</style>
