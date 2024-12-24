<template>
    <div class="person">
        <h1>Todo List</h1>
        <input type="text" v-model="newTask">
        <el-button type="primary" @click="addTask" >新增</el-button>
        <ul>
            <li v-for="(item,index) in tasks" :key="index">
                <div>
                    <input type="checkbox" v-model="item.isComplete" @change="updateTask(item.id,item.isComplete,item.task,item.task)" ></input>
                    <span v-if="!item.isEditing" @click="clickSpan(item)">{{item.task}}</span>
                    <input 
                        v-else type="text" 
                        v-model="upTask"  
                        @blur="updateTask(item.id,item.isComplete,upTask)" 
                        @keydown.enter="updateTask(item.id,item.isComplete,upTask)"
                    />
                </div>
                <div>
                    <!-- <el-button type="primary" @click="updateTask(item.id,item.isComplete,newTask)" >修改</el-button> -->
                    <el-button type="primary" @click="deleteTask(item.id)" >删除</el-button>
                </div>
                
            </li>
        </ul>
        </input>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref,reactive,watch, onMounted} from 'vue'
import axios from 'axios'

// 定义任务接口
interface Task {
  id: number;
  task: string;
  dueDate: string;
  isComplete: boolean;
  createTime:string;
  isEditing: boolean;
}

// 用于存储新任务的输入内容
const newTask = ref('');

// 用于存储修改任务的输入内容
const upTask = ref('');

// 存储任务列表，每个任务是一个包含text和completed属性的对象
const tasks = ref<Task[]>([])   // 明确指定类型为 Task[]

//用于控制是否显示输入框


function clickSpan(item:Task){
    item.isEditing = true;
    console.log("点击了span",item.isEditing);
}



// 获取所有task
const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/todolist/getAll');
      console.log(response.data);
      const data = response.data.data;
        // 对获取到的每一条数据中的isComplete字段进行转换
        const convertedData = data.map((native:any) => ({
         ...native,
          isComplete: native.isComplete === "1",
          isEditing: false
        }));
        tasks.value = convertedData;
        console.log(tasks.value);

    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  // 添加任务
function addTask(){
axios.post('http://localhost:8080/todolist/add', {
"task":newTask.value,
"dueDate":"2024-12-20",
"isComplete":"0",
"createTime":"2024-12-20"
})
.then(function (response) {
    console.log(response);
    fetchTasks();
    })
.catch(function (error) {
    console.log(error);
});
    
}
// 删除任务
function deleteTask(id:number){
    console.log(id);
    axios.post('http://localhost:8080/todolist/deleteById/'+id)
    .then(function (response) {
        console.log(response);
        fetchTasks();
        })
    .catch(function (error) {
        console.log(error);
    });
}

// 更新任务
function updateTask(id:number,isComplete:boolean,uptask:string){
    let newIsComplete = isComplete ? 1 : 0;
    if(uptask==""){
        fetchTasks();
        return;
    }
    axios.post('http://localhost:8080/todolist/updateById/'+id, {
    "isComplete":newIsComplete,
    "task":uptask
    })
    .then(function (response) {
        console.log(response);
        fetchTasks();
        })
    .catch(function (error) {
        console.log(error);
    });
    
}





// 在组件挂载时获取所有task
onMounted(() => {
    fetchTasks();
});








</script>

<style>
    .person{
    background-color: rgb(213, 227, 244);
    box-shadow: 0 0 10px ;
    border-radius: 10px;
    padding: 20px;
    }
    button{
        margin: 5px
    }
</style>