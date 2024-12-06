<template>
    <div class="person">
        姓：<input type="text" v-model="person.firstname"> <br>
        名：<input type="text" v-model="person.lastname"> <br>
        <button @click="changeName">修改名字为li—si</button>
        <h2>全名：{{ fullName }}</h2>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive,computed } from 'vue'
    let person = reactive({
        firstname:'zhang',
        lastname:'san'
    })

    // 这样定义的计算属性，是只读的，不能修改。
    //要加上get(){} 和 set(){} 来定义一个可写的计算属性。
    // get(){}用来读取计算属性的值，set(){}用来修改计算属性的值。
    // fullName.value = 'li-si' 直接给他赋值，就回调用set(val){}，这里的'li-si'会作为参数传进set的val。


    // let fullName = computed({{
    //     return person.firstname.slice(0,1).toUpperCase() + person.firstname.slice(1).toLowerCase() + '-' + person.lastname
    // }})

    let fullName = computed({
        get () {
            return person.firstname.slice(0,1).toUpperCase() + person.firstname.slice(1).toLowerCase() + '-' + person.lastname
        },
        set (val){
            console.log("set",val)
            let [firstname,lastname] = val.split('-')
            person.firstname = firstname
            person.lastname = lastname
        }
       
    })
    function changeName(){
        fullName.value = 'li-si'
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