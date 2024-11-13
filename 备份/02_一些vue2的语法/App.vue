<template>
    <div class="app">
        <h1>你好啊</h1>
        <Person/>
    </div>
</template>

<script lang="ts">
    import Person from "./components/Person.vue"  // 前边的Person是person.vue文件中的export default的name，是我们自己给组件起的名。
    export default{
        name:'App',
        components:{Person} // 注册组件，注册之后就可以使用了Person指的是组件名字
    }
</script>
   
<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px ;
        border-radius: 10px;
        padding: 20px;
    }
</style>