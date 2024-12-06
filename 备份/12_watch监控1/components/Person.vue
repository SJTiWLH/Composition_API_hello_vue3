<template>
    <div class="person">
        <h1>情况1：监听【ref】定义的【基本数据】类型</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changesum">sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref , watch} from 'vue'
    let sum = ref(0)
    function changesum(){
        sum.value++
    }
    const stopWatch =  watch(sum, (newValue, oldValue)=>{
        console.log("sum改变了",newValue, oldValue)
        if(newValue >= 5){
            stopWatch() //停止监听
        }
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