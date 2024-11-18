<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click = "changePrice">修改汽车价格</button>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id">
                {{ game.name }}
            </li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>
        <hr>
        <h2>{{ abj.a.b.c }}</h2>
        <button @click="abj.a.b.c = 888">修改对象属性</button>
    </div>
    
</template>

<script lang="ts" setup name="Person">
    import { reactive } from 'vue';  // reactive是对象类型的响应式，引入reactive后，只需要把需要响应的数据用括号包住前面写上reactive即可
    //数据
    let car = reactive({brand:'奔驰',price:100})
    let games = reactive([
        {id:'aysdytfsatr01',name:'王者荣耀'},
        {id:'aysdytfsatr02',name:'原神'}, 
        {id:'aysdytfsatr03',name:'三国志'}
    ])
    let abj  = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    //方法
    function changePrice(){
        car.price += 10
    }
    function changeFirstGame(){
        games[0].name = '绝地求生'
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