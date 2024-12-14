<template>
    <div id="app">
      <h1>Todo List</h1>
      <input v-model="newTask" placeholder="添加新任务" @keyup.enter="addTask" />
      <ul>
        <li v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
          {{ task.text }}
          <button @click="toggleTask(index)">完成</button>
          <button @click="deleteTask(index)">删除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 用于存储新任务的输入内容
  const newTask = ref('');
  // 存储任务列表，每个任务是一个包含text和completed属性的对象
  const tasks = ref([
    { text: '学习Vue 3', completed: false },
    { text: '去超市购物', completed: false }
  ]);
  
  // 添加任务的方法
  const addTask = () => {
    if (newTask.value.trim()!== '') {
      tasks.value.push({ text: newTask.value, completed: false });
      newTask.value = '';
    }
  };
  
  // 切换任务完成状态的方法
  const toggleTask = (index) => {
    tasks.value[index].completed =!tasks.value[index].completed;
  };
  
  // 删除任务的方法
  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .completed {
    text-decoration: line-through;
    color: #999;
  }
  
  button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  </style>