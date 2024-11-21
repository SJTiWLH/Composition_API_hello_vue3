<template>
  <div class="person">
    <div class="add-form">
      <input 
        v-model="newPerson.name" 
        type="text" 
        placeholder="请输入姓名" 
        class="edit-input"
      >
      <input 
        v-model="newPerson.age" 
        type="number" 
        placeholder="请输入年龄" 
        class="edit-input"
      >
      <button class="btn btn-success" @click="handleAdd">新增</button>
    </div>

    <table class="person-table">
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in persons" :key="person.id">
          <td>
            <span v-if="!person.isEditing">{{ person.name }}</span>
            <input
              v-else
              v-model="person.editName"
              class="edit-input"
              type="text"
            />
          </td>
          <td>
            <span v-if="!person.isEditing">{{ person.age }}</span>
            <input
              v-else
              v-model="person.editAge"
              class="edit-input"
              type="number"
            />
          </td>
          <td>
            <template v-if="!person.isEditing">
              <button class="btn" @click="startEdit(person)">编辑</button>
              <button class="btn btn-danger" @click="handleDelete(person)">删除</button>
            </template>
            <template v-else>
              <button class="btn btn-success" @click="saveEdit(person)">保存</button>
              <button class="btn btn-warning" @click="cancelEdit(person)">取消</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'

interface Person {
  id: number
  name: string
  age: number
  isEditing: boolean
  editName: string
  editAge: number
}

const persons = ref<Person[]>([
  {
    id: 1,
    name: '张三',
    age: 18,
    isEditing: false,
    editName: '',
    editAge: 0
  },
  {
    id: 2,
    name: '李四',
    age: 20,
    isEditing: false,
    editName: '',
    editAge: 0
  }
])

// 新增人员的表单数据
const newPerson = ref({
  name: '',
  age: '' as string | number
})

// 生成唯一ID的函数
const generateId = () => {
  return Math.max(...persons.value.map(p => p.id), 0) + 1
}

// 开始编辑
const startEdit = (person: Person) => {
  person.isEditing = true
  person.editName = person.name
  person.editAge = person.age
}

// 保存编辑
const saveEdit = (person: Person) => {
  person.name = person.editName
  person.age = person.editAge
  person.isEditing = false
}

// 取消编辑
const cancelEdit = (person: Person) => {
  person.isEditing = false
}

// 添加删除方法
const handleDelete = (person: Person) => {
  if (confirm(`确定要删除 ${person.name} 吗？`)) {
    persons.value = persons.value.filter(p => p.id !== person.id)
  }
}

// 新增方法
const handleAdd = () => {
  // 表单验证
  if (!newPerson.value.name.trim()) {
    alert('请输入姓名')
    return
  }
  if (!newPerson.value.age) {
    alert('请输入年龄')
    return
  }

  // 添加新人员
  persons.value.push({
    id: generateId(),
    name: newPerson.value.name,
    age: Number(newPerson.value.age),
    isEditing: false,
    editName: '',
    editAge: 0
  })

  // 清空表单
  newPerson.value.name = ''
  newPerson.value.age = ''
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.person-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
}

.person-table th,
.person-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.person-table th {
  background-color: #4a90e2;
  color: white;
  font-weight: bold;
}

.person-table tr:hover {
  background-color: #f5f5f5;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4a90e2;
  color: white;
  margin-right: 5px;
}

.btn:hover {
  opacity: 0.9;
}

.btn-danger {
  background-color: #e74c3c;
}

.edit-input {
  width: 80%;
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-success {
  background-color: #2ecc71;
}

.btn-warning {
  background-color: #f1c40f;
}

.add-form {
  margin-bottom: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.add-form .edit-input {
  flex: 1;
  max-width: 200px;
}
</style>