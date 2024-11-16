// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css'
const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);
app.mount('#app');