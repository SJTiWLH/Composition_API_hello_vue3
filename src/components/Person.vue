<template>
    <div class="person">
        <h1>情况3:监听【reactive】定义的【对象数据】类型</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive , watch} from 'vue'
    //数据
    let person = reactive({
        name:'张三',
        age:18,
        tel:'123456789'
    })  
    //方法
    function changeName(){
        person.name += '~'
    }
    function changeAge(){
        person.age += 1
    }
    function changePerson(){
      Object.assign(person,{name:'李四',age:20})
    }

    //监控  监听【reactive】定义的【对象数据】类型，默认开启深度监控的，且关不掉。
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue)
    })

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