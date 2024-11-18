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


<script lang="ts" setup name="Person">
    import { ref } from 'vue' // ref是对象类型的响应式，引入ref后，只需要把需要响应的数据用括号包住前面写上ref即可

    let name = ref('李四')  // ref是对象类型的响应式
    let age = ref(18)
    let tel = '123456789'
    console.log(name)
    console.log(age)
    console.log(tel)
    

    function changeName(){
        name.value = 'zhang-san' // name是响应式数据，所以可以修改，但是需要给name加上.value
        console.log(name) 
    }
    function changeAge(){
        age.value += 1
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