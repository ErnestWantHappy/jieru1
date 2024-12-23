<template>
  <div class='content'>
    <!-- 主容器 -->
    <div class="diagram-main">
      <el-select class="select-line" v-model="lineColor" placeholder="Select" style="width: 100px" >
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
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
import { icons, Menu } from "@logicflow/extension";// 导入菜单插件
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
import laptopNode from "../node/laptopNode";
import phoneNode from "../node/phoneNode";
import tabletNode from "../node/tabletNode";
// 导入自定义边
import customPolyline from "../edge/customPolyline";
import { ElMessage } from "element-plus";
LogicFlow.use(DndPanel);
LogicFlow.use(SelectionSelect);
LogicFlow.use(Menu);

// 定义一个响应式引用，用于获取DOM元素
const diagram = ref(null);
const lineColor = ref('#000000')

const options = [
  {
    value: '#000000',
    label: '网线',
  },
  {
    value: '#FFCC00',
    label: '光纤',
  },
  {
    value: 'wireless',
    label: '无线',
  },
]



let lf;
let graphModel;
// 当组件挂载完成后执行
onMounted(() => {
  // 创建LogicFlow实例，并配置容器和插件
  lf = new LogicFlow({
    container: diagram.value, // 指定图表渲染的DOM容器
    grid: true, // 开启网格
    plugins: [Control], // 使用Control插件
  });
  lf.register(webNode);
  lf.register(pcNode);
  lf.register(routerNode);
  lf.register(switchNode);
  lf.register(wirelessNode);
  lf.register(customPolyline);
  lf.register(laptopNode);
  lf.register(phoneNode);
  lf.register(tabletNode);
  lf.setDefaultEdgeType("customPolyline");
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
      label: '台式电脑',
      icon: '/pc.svg',
    },
    {
      type: 'laptop-node',
      label: '笔记本电脑',
      icon: '/laptop.svg',
    },
    {
      type: 'phone-node',
      label: '手机',
      icon: '/phone.svg',
    },
    {
      type:'tablet-node',
      label:'平板电脑',
      icon:'/tablet.svg'
    }
  ]);
  lf.extension.menu.setMenuConfig({
    nodeMenu: [
      {
        text: "删除",
        callback(node) {
          lf.deleteNode(node.id);
        },
      },
    ], // 覆盖默认的节点右键菜单
    graphMenu: [], // 覆盖默认的边右键菜单，与false表现一样
  });
  graphModel=lf.graphModel;
  lf.on('history:change', (data) => {
    console.log(data);
    const elements = graphModel.getSelectElements(true);
    console.log(elements)
    
  })
  lf.on('edge:add', (data) => {
    console.log(data.data.id);
    lf.setProperties(data.data.id, {
      lineColor: lineColor.value,
    });
  })
  lf.on('connection:not-allowed', (msg) => {
  console.log(msg.msg);
  ElMessage.warning(msg.msg);
});
});

</script>

<style scoped>


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
  position: relative;
}

.select-line{
  position: absolute; /* 绝对定位 */
  top: 5px;             /* 紧贴顶部 */
  left: 100px;            /* 紧贴左侧 */
  z-index: 9;
}

/* 实际的图表容器样式 */
.lf-diagram {
  box-shadow: 0px 0px 4px #838284;
  /* 添加阴影效果 */
  width: 100%;
  height: 100%;
}

/* 图表侧边栏样式 */
.diagram-sidebar {
  position: absolute;
  /* 绝对定位 */
  background: #fff;
  /* 白色背景 */
  top: 80px;
  /* 距离顶部80px */
  left: 20px;
  /* 距离左侧20px */
  width: 150px;
  /* 宽度为150px */
  z-index: 10;
  /* 层叠顺序 */
  height: 505px;
  /* 高度为505px */
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.15);
  /* 添加阴影效果 */
  border-radius: 4px;
  /* 圆角 */
}
</style>