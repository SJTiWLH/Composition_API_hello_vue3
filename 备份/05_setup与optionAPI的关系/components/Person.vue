<template>
    <div class="person">
        <h1>你好啊</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <hr>
        <h2>测试1:{{ a }}</h2>
        <h2>测试2:{{ c }}</h2>
        <button @click="b">测试2</button>


        </div>
</template>

<script lang="ts">
    export default{
        name:'Person',
        // data 和 methods 可以和setup 共存,data可以调用setup的变量,但是setup的变量不能调用data的变量
        //setup的使用周期更早。
        data(){
            return{
                a : 100,
                c: this.name
            }
            
        },
        methods:{
            b(){
                console.log('b 被调用了')
            }
        },
        setup(){
            //setup中不使用this
            //此时的数据都不是响应式的数据
            let name = '李四'
            let age = 18
            let tel = '123456789'

            function changeName(){
                name = 'zhang-san' //赋值操作，不是响应式
                console.log(name)  //确实修改了name，但不是响应式所以不展示
            }
            function changeAge(){
                age += 1
                console.log(age)
            }
            function showTel(){
                alert(tel)
                console.log(tel)
            }

            return {
                name,
                age,
                tel,
                changeName,
                changeAge,
                showTel
            }        // 返回值相当于把setup里的数据放出来
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
    button{
        margin: 5px
    }
</style>