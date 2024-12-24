//  引入createApp用于创建app
import{createApp} from 'vue'
// 引入App跟组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue"

// createApp(App).mount("#app")
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')