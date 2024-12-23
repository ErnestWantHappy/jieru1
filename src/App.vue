<script setup>
import FlowDiagram from './components/FlowDiagram.vue'
</script>

<template>
  <FlowDiagram class="flow-container"></FlowDiagram>
  <div class="footer">技术支持：大目湾实验学校——郑东旭</div>
</template>

<style scoped>
.flow-container {
    width: 100%;
    height: calc(100vh - 40px);;
    border: 1px solid #ccc;
  }
  .footer {
    text-align: center;
    color: #5E6772;
    font-size: 14px;
    /* background-color: #f5f5f5; */
    margin-top: 2px;
  }
</style>
