<template>
    <div class='content'>
        <!-- 主容器 -->
        <div class="diagram-main">
            <!-- 图表侧边栏组件，通过v-on监听dragInNode事件，当前被注释掉了 -->
            <!-- <diagram-sidebar class="diagram-sidebar"/> -->
            <!-- 实际的图表容器，使用了ref属性以便在Vue实例中通过this.$refs.diagram访问 -->
            <div class="lf-diagram" ref="diagram"></div>
        </div>
    </div>
</template>

<script setup>
// 导入LogicFlow核心库
import LogicFlow from "@logicflow/core";
// 导入LogicFlow样式
import '@logicflow/core/es/index.css';
import "@logicflow/core/lib/style/index.css";
// 导入Vue的组合式API
import { ref, onMounted } from "vue";
// 导入LogicFlow扩展插件
import { Control } from "@logicflow/extension";
// 导入扩展插件样式
import '@logicflow/extension/lib/style/index.css';
import { DndPanel, SelectionSelect } from '@logicflow/extension';
// 导入自定义节点
import webNode from '../node/webNode';
import pcNode from "../node/pcNode";
import routerNode from "../node/routerNode";
import switchNode from "../node/switchNode";
import wirelessNode from "../node/wirelessNode";
LogicFlow.use(DndPanel);
LogicFlow.use(SelectionSelect);

// 定义一个响应式引用，用于获取DOM元素
const diagram = ref(null);

// 当组件挂载完成后执行
onMounted(() => {
    // 创建LogicFlow实例，并配置容器和插件
    const lf = new LogicFlow({
        container: diagram.value, // 指定图表渲染的DOM容器
        grid: true, // 开启网格
        plugins: [Control], // 使用Control插件
    });
    lf.register(webNode);
    lf.register(pcNode);
    lf.register(routerNode);
    lf.register(switchNode);
    lf.register(wirelessNode);
    // 渲染图表
    lf.render();
    // 将图表居中显示
    lf.translateCenter();
    lf.extension.dndPanel.setPatternItems([
  {
    type: 'web-node',
    label: '互联网',
    icon: '/web.svg',
  },
  {
    type: 'router-node',
    label: '光猫路由器',
    icon: '/router.svg',
  },
  {
    type: 'switch-node',
    label: '交换机',
    icon: '/switch.svg',
  },
  {
    type: 'wireless-node',
    label: '无线路由器',
    icon: '/wireless.svg',
  },
  {
    type: 'pc-node',
    label: '电脑节点',
    icon: '/pc.svg',
  }
]);
});

</script>

<style scoped>
/* 容器样式 */
.container {
    width: 500px;
    height: 400px;
}

/* 内容区域样式 */
.content {
    width: 100%;
    height: 100%;
}

/* 图表样式 */
.diagram {
    width: 100%;
    height: 100%;
}

/* 图表主容器样式 */
.diagram-main {
    width: 100%;
    height: 100%;
}

/* 实际的图表容器样式 */
.lf-diagram {
    box-shadow: 0px 0px 4px #838284; /* 添加阴影效果 */
    width: 100%;
    height: 95%; /* 高度占父容器的95% */
    border: 1px solid red; /* 红色边框 */
}

/* 图表侧边栏样式 */
.diagram-sidebar {
    position: absolute; /* 绝对定位 */
    background: #fff; /* 白色背景 */
    top: 80px; /* 距离顶部80px */
    left: 20px; /* 距离左侧20px */
    width: 150px; /* 宽度为150px */
    z-index: 10; /* 层叠顺序 */
    height: 505px; /* 高度为505px */
    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.15); /* 添加阴影效果 */
    border-radius: 4px; /* 圆角 */
}
</style>