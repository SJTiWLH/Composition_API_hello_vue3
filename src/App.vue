  <template>
    <div id="app">
      <Person />
    </div>
  </template>
  
  <script setup lang="ts">
    import Person from "./components/Person.vue"  // 前边的Person是person.vue文件中的export default的name，是我们自己给组件起的名。
    
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
    background-color: aliceblue;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #1c1b1b;
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