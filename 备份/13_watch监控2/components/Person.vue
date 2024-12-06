<template>
    <div class="person">
        <h1>情况2:监听【ref】定义的【对象数据】类型</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref , watch} from 'vue'
    //数据
    let person = ref({
        name:'张三',
        age:18,
        tel:'123456789'
    })  
    //方法
    function changeName(){
        person.value.name += '~'
    }
    function changeAge(){
        person.value.age += 1
    }
    function changePerson(){
        person.value = {
            name:'李四',
            age:20,
            tel:'987654321'
        }
    }

    //监视  监听【ref】定义的【对象数据】类型,监控的只是对象的地址值，想要监控对象内部属性，需要手动开启深度监控{deep:true}
    // watch的第一个参数是要监视的数据，
    // watch的第二个参数是回调函数，当数据发生变化时，会执行回调函数，
    // watch的第三个参数是配置对象，可以配置是否开启深度监控{deep:true}，也可以配置回调函数执行时机，默认是立即执行，可以配置{immediate:false}，表示不立即执行。
    watch(person,(newValue,oldValue)=>{
        console.log('监视到person数据变化了',newValue,oldValue)
        
    },{deep:true})

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