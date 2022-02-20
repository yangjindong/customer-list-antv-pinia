import { createApp } from 'vue'
import router from '@/router/index'
import i18n from './plugins/i18n'
import store from '@/store'
import App from './App.vue'
import 'ant-design-vue/es/message/style/index.js'
import 'ant-design-vue/es/notification/style/index.js'

const app = createApp(App)
app.use(router).use(store).use(i18n).mount('#app')
