<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age}}_{{ nl }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive ,toRefs,toRef} from 'vue'
    let person = reactive({
        name:'张三',
        age:18
    })

    let {name,age} = toRefs(person) // 接收一个由reactive定义的响应式对象person 并将其中的所有key：value，变成响应式对象结构出来
    let nl = toRef(person,"age")
    function changeName(){
        name.value += '~'
    }
        
    function changeAge(){
        person.age += 1
        console.log(person.age,age.value)
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