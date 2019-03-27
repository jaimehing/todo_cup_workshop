<template>
  <div class="no-todos" v-if="todoLength === 0">
    <span class="no-todos-text">Nothing to do here. Create a todo to start.</span>
    <img class="no-todos-image" alt="No Todo" src="@/assets/images/todo.png">
  </div>
</template>

<script>
export default {
  props: {
    todoLength: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style>
.no-todos {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
}
.no-todos-text {
  font-size: 1.5rem;
  font-weight: 200;
}
.no-todos-image {
  align-self: center;
  width: 30%;
}
</style>
