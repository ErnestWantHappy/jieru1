// src/store/flowStore.js
import { defineStore } from 'pinia';

export const useFlowStore = defineStore('flow', {
  state: () => ({
    nodes: [],
    edges: [],
  }),
  actions: {
    addNode(node) {
      this.nodes.push(node);
    },
    addEdge(edge) {
      this.edges.push(edge);
    },
  },
});