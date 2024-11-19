<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click = "changeName">修改汽车品牌</button>
        <button @click = "changePrice">修改汽车价格</button>
        <button @click = "changeCar">修改汽车</button>
        <h2>当前求和为{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
      
    </div>
    
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue';  // ref来定义响应式，其实是把整个对象放到了他的.value里，value里的对象还是使用的reactive
    import { reactive } from 'vue';  // ref 创建的变量必须使用.value(可以使用 volar 插件自动添加.value）。
    //数据
    // let car = reactive({brand:'奔驰',price:100})  //reactive不能直接赋值新对象,请看changeCar方法
    let car = ref({brand:'奔驰',price:100}) // reg 可以直接赋值新对象，只需要将car.value 直接赋值新对象即可。

    let sum = ref(0)

    function changeName(){
        // car.brand = '宝马'
        car.value.brand = '宝马'
    }
    function changePrice(){
        // car.price += 10
        car.value.price += 10
    }
    function changeCar(){  // 修改car对象，来讲解一下reactive不能直接赋值新对象，但是ref可以
        //car = {brand:'奔驰',price:100} // 这么写是错误的，因为reactive定义的响应式对象不能直接被赋一个新的对象，只能通过修改其属性的方式来修改。
        //car = reactive({brand:'奔驰',price:100}) //也是错误的
        Object.assign(car,{brand:'奥托',price:1}) // 正确，assign是分配的意思，意思是将后面{}的属性分配给car，分别顶替掉car里原来的属性。
        //如果car是ref定义的响应式，只需要给 car.value 赋值新对象即可
        car.value = {brand:'奥托',price:1}
    }
    function changeSum(){
        sum.value += 1
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
    li{
        margin: 5px;
        font-size: 20px;
    }
</style>