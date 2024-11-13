<template>
    <div class="person">
        <h1>你好啊</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="showTel">查看联系方式</button>

        <!-- <h2>电话：{{ tel }}</h2> -->

        </div>
</template>

<script lang="ts">
    export default{
        name:'Person',
        data(){
            return{
                name:"张三",
                age:"18",
                tel:"18888888888"
            }
        },
        methods:{
            showTel(){
                alert(this.tel)
            }
        }
    }
</script>
   
<style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px ;
        border-radius: 10px;
        padding: 20px;
    }
</style>