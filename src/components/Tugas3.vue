<template>
  <q-page class="flex flex-center custom-page">
    <div class="todo-list">
      <h2>To Do List</h2>
      <TodoInput
        :newTodo="newTodo"
        :showCompleted="showCompleted"
        @update:newTodo="updateNewTodo"
        @addTodo="addTodo"
        @toggleCompletedFilter="toggleCompletedFilter"
      />
      <TodoList
        :todos="todos"
        :showCompleted="showCompleted"
        @editTodo="editTodo"
        @saveTodo="saveTodo"
        @removeTodo="removeTodo"
      />
      <a href="https://223510222-rakan.vercel.app/" class="cta" target="_blank"
        >Link Web Tugas 3</a
      >
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import TodoInput from "./todo/TodoInput.vue";
import TodoList from "./todo/TodoList.vue";

const newTodo = ref("");
const todos = ref([]);
const showCompleted = ref(true);

const updateNewTodo = (value) => {
  newTodo.value = value;
};

const addTodo = (todoText) => {
  if (todoText.trim() !== "") {
    todos.value.push({
      text: todoText,
      completed: false,
      editing: false,
    });
    newTodo.value = ""; // Clear the input after adding
  }
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};

const editTodo = (index) => {
  todos.value[index].editing = true;
};

const saveTodo = (index, text) => {
  if (text.trim() !== "") {
    todos.value[index].text = text;
    todos.value[index].editing = false;
  } else {
    removeTodo(index);
  }
};

const toggleCompletedFilter = () => {
  showCompleted.value = !showCompleted.value;
};
</script>

<style scoped>
.custom-page {
  margin-top: -3rem;
}
.todo-list {
  margin: 7rem auto;
  padding: 2rem;
  width: 800px;
  background-color: #526d82;
  border-radius: 7px;
}
h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
}
.cta {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #949494;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  text-decoration: none;
  font-weight: bold;
}
</style>
