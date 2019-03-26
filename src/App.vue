<template>
  <div id="app">
    <div class="TodoContainer">
      <h1 class="AppTitle">My Todo Application</h1>
      <form>
        <input type="text" placeholder="e.g. Get the laundry" class="TodoInput" v-model="todoText">
        <button type="button" class="AddButton" @click="addTodo">Add</button>
      </form>
      <div class="Todos">
        <div class="Todo" :key="ind" v-for="(todo, ind) in todos">
          <span class="TodoContent">{{todo}}</span>
          <button type="button" class="DeleteTodoButton" @click="deleteTodo(ind)">Delete</button>
        </div>
        <div class="no-todos" v-if="todos.length === 0">
          <span class="no-todos-text">Nothing to do here. Create a todo to start.</span>
          <img class="no-todos-image" alt="No Todo" src="@/assets/images/todo.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// <todo-text-component @input="updateTodoText"/>
// <add-todo-button @click="addTodo"/>
import axios from 'axios';
// import TodoTextComponent from './components/TodoTextComponent.vue';
// import AddTodoButton from './components/AddTodoButton.vue';

export default {
  /* components: {
    TodoTextComponent,
    AddTodoButton,
  }, */
  data() {
    return {
      todoText: '',
      todos: [],
    };
  },
  async created() {
    /* try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      this.todos = response.data.map(todo => todo.title);
    } catch (e) {
      console.log(e);
    } */
  },
  methods: {
    /* updateTodoText(value) {
      console.log('updateTodoText is called');
      console.log(value);
      this.todoText = value;
    }, */
    deleteTodo(ind) {
      this.todos.splice(ind, 1);
    },
    addTodo() {
      this.todos.push(this.todoText);
      this.todoText = '';
    },
  },
};
</script>

<style lang="scss">
html,
body {
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
}

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

.TodoContainer {
  max-width: 1024px;
  width: 100%;
  align-self: center;
}

.AppTitle {
  font-weight: 900;
  color: #4188eb;
}

.no-todos-text {
  font-size: 1.5rem;
  font-weight: 200;
}

.Todos {
  margin-top: 2rem;
}

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

.TodoContent {
  align-self: center;
}

.no-todos-image {
  align-self: center;
  width: 30%;
}

.no-todos {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
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
