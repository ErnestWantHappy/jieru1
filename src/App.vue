<script setup>
import FlowDiagram from './components/FlowDiagram.vue'
</script>

<template>
  <FlowDiagram class="flow-container"></FlowDiagram>
</template>

<style scoped>
.flow-container {
    width: 100%;
    height: calc(100vh - 84px);;
    border: 1px solid #ccc;
  }
</style>
