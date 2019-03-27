import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoText: '',
    todos: [],
    isFetching: false,
  },
  mutations: {
    updateTodoText(state, value) {
      state.todoText = value;
    },
    addTodo(state) {
      state.todos.push(state.todoText);
      state.todoText = '';
    },
    updateIsFetching(state, flag) {
      state.isFetching = flag;
    },
    deleteTodo(state, ind) {
      state.todos.splice(ind, 1);
    },
    updateAllTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    async loadTodos(context) {
      try {
        context.commit('updateIsFetching', true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        context.commit('updateIsFetching', false);
        context.commit('updateAllTodos', response.data.map(todo => todo.title));
      } catch (e) {
        console.log(e);
      }
    },
  },
});
