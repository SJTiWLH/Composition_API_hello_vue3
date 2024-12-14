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
  import { ref, onMounted } from 'vue';
  
  // 用于存储新任务的输入内容
  const newTask = ref('');
  // 存储任务列表，每个任务是一个包含text和completed属性的对象
  const tasks = ref([]);
  
  // 从本地存储中获取任务列表数据并解析，在组件挂载时执行
  // todoTasks并不是一个实际存在于磁盘上的常规文件呀，它是利用浏览器提供的localStorage机制中的一个键（key）来存储数据的标识名称。
  // localStorage是浏览器内置的一种简单的本地存储方式，它以键值对（key-value pairs）的形式将数据存储在浏览器端，数据保存在用户本地计算机的浏览器环境中，就像一个小型的本地数据库，但只支持存储字符串类型的数据。
  onMounted(() => {
    const storedTasks = localStorage.getItem('todoTasks');
    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks);
    }
  });
  
  // 添加任务的方法，添加后同时更新本地存储
  const addTask = () => {
    if (newTask.value.trim()!== '') {
      tasks.value.push({ text: newTask.value, completed: false });
      newTask.value = '';
      // 将更新后的任务列表存储到本地存储中
      localStorage.setItem('todoTasks', JSON.stringify(tasks.value));
    }
  };
  
  // 切换任务完成状态的方法，状态变更后更新本地存储
  const toggleTask = (index) => {
    tasks.value[index].completed =!tasks.value[index].completed;
    localStorage.setItem('todoTasks', JSON.stringify(tasks.value));
  };
  
  // 删除任务的方法，删除后更新本地存储
  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
    localStorage.setItem('todoTasks', JSON.stringify(tasks.value));
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
  }
  </style>