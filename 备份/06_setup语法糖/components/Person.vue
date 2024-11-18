<template>
    <div class="person">
        <h2>{{name}}</h2>
        <h1>你好啊</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        </div>
</template>

<!-- <script lang="ts">
    export default{
        name:'Person',   //为了给组件起名字。
    }
</script> -->

<script lang="ts" setup>
    // let name = 'li-san'
    let name = '李四'
    let age = 18
    let tel = '123456789'

    function changeName(){
        name = 'zhang-san' //赋值操作，不是响应式
        console.log(name) //确实修改了name，但不是响应式所以不展示
    }
    function changeAge(){
        age += 1
        console.log(age)
    }
    function showTel(){
        alert(tel)
        console.log(tel)
    }
</script>

<style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px ;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 5px
    }
</style>