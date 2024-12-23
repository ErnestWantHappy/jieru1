import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class laptopNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1733490268116" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2062"
    width="64" height="64">
    <path
        d="M878.2 662.7H153.1c-14 0-25.5-11.3-25.5-25.5V180.3c0-29.7 24.1-53.7 53.7-53.7h668.6c29.7 0 53.7 24.1 53.7 53.7v457.1c0.1 14-11.2 25.3-25.4 25.3z"
        fill="#FFFFFF" p-id="2063"></path>
    <path
        d="M878.2 676.9H153.1c-21.8 0-39.6-17.7-39.6-39.6v-457c0-37.4 30.4-67.8 67.8-67.8h668.6c37.4 0 67.8 30.4 67.8 67.8v457.1c0.1 21.8-17.6 39.5-39.5 39.5zM181.4 140.8c-21.8 0-39.5 17.7-39.5 39.5v457.1c0 6.2 5.1 11.3 11.3 11.3h725.1c6.2 0 11.3-5.1 11.3-11.3V180.3c0-21.8-17.7-39.5-39.5-39.5H181.4z"
        fill="#1B81FC" p-id="2064"></path>
    <path
        d="M817 613H214.4c-19.3 0-35-15.6-35-35V211.3c0-19.3 15.6-35 35-35H817c19.3 0 35 15.6 35 35V578c0 19.4-15.7 35-35 35z"
        fill="#CBE4FE" p-id="2065"></path>
    <path
        d="M817 627.2H214.4c-27 0-49.1-21.9-49.1-49.1V211.3c0-27 21.9-49.1 49.1-49.1H817c27 0 49.1 21.9 49.1 49.1V578c0.1 27.2-22 49.2-49.1 49.2zM214.4 190.6c-11.5 0-20.8 9.3-20.8 20.8v366.7c0 11.5 9.3 20.8 20.8 20.8H817c11.5 0 20.8-9.3 20.8-20.8V211.4c0-11.5-9.3-20.8-20.8-20.8H214.4z"
        fill="#1B81FC" p-id="2066"></path>
    <path
        d="M966.1 873.8H66.6c-16.4 0-26.2-18.5-16.9-32L125.6 732c3.8-5.5 10.1-8.8 16.9-8.8h757.1c7.1 0 13.7 3.7 17.4 9.9L983.5 843c8.4 13.4-1.4 30.8-17.4 30.8z"
        fill="#CBE4FE" p-id="2067"></path>
    <path
        d="M962 813.5H62.5c-16.4 0-26.2-18.5-16.9-32l75.9-109.9c3.8-5.5 10.1-8.8 16.9-8.8h757.1c7.1 0 13.7 3.7 17.4 9.9l66.6 109.9c8.2 13.5-1.6 30.9-17.5 30.9z"
        fill="#FFFFFF" p-id="2068"></path>
    <path
        d="M962 827H62.5c-12.6 0-24.1-6.9-30-18.1-5.8-11.2-5.1-24.6 2.1-35L110.5 664c6.4-9.2 16.7-14.6 27.9-14.6h757.1c11.8 0 22.9 6.2 29 16.3L991 775.6c6.4 10.6 6.7 23.4 0.6 34.1-6.2 10.9-17.3 17.3-29.6 17.3zM138.3 676.2c-2.3 0-4.4 1.1-5.8 3L56.6 789c-2.1 3.1-1 6.1-0.4 7.2 0.6 1.1 2.4 3.7 6.2 3.7H962c3.7 0 5.5-2.5 6.1-3.5 0.6-1.1 1.8-3.8-0.1-7.1l-66.6-109.9c-1.3-2.1-3.5-3.4-5.9-3.4H138.3v0.2z"
        fill="#1B81FC" p-id="2069"></path>
    <path
        d="M865.9 726.4H165.5c-7.8 0-14.2-6.4-14.2-14.2 0-7.8 6.4-14.2 14.2-14.2h700.3c7.8 0 14.2 6.4 14.2 14.2 0 7.9-6.3 14.2-14.1 14.2z"
        fill="#1B81FC" p-id="2070"></path>
    <path
        d="M894.1 773.6H137.5c-7.8 0-14.2-6.4-14.2-14.2 0-7.8 6.4-14.2 14.2-14.2h756.6c7.8 0 14.2 6.4 14.2 14.2-0.1 7.8-6.5 14.2-14.2 14.2z"
        fill="#1B81FC" p-id="2071"></path>
    <path
        d="M367.6 394.4c-11.8 0-21.5-9.6-21.5-21.5v-25.1c0-11.8 9.6-21.5 21.5-21.5 11.8 0 21.5 9.6 21.5 21.5v25.1c0 11.9-9.6 21.5-21.5 21.5z"
        fill="#1B81FC" p-id="2072"></path>
    <path
        d="M656.7 394.4c-11.8 0-21.5-9.6-21.5-21.5v-25.1c0-11.8 9.6-21.5 21.5-21.5 11.8 0 21.5 9.6 21.5 21.5v25.1c0.1 11.9-9.6 21.5-21.5 21.5z"
        fill="#1B81FC" p-id="2073"></path>
    <path
        d="M515.8 540.2c-35 0-63.4-28.5-63.4-63.4 0-7.8 6.4-14.2 14.2-14.2 7.8 0 14.2 6.4 14.2 14.2 0 19.4 15.7 35.1 35.1 35.1 19.4 0 35.1-15.7 35.1-35.1 0-7.8 6.4-14.2 14.2-14.2 7.8 0 14.2 6.4 14.2 14.2-0.1 35-28.6 63.4-63.6 63.4z"
        fill="#1B81FC" p-id="2074"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>笔记本电脑</div>
        </div>
      </div>
    `;
    el.innerHTML = html;
    rootEl.innerHTML = '';
    rootEl.appendChild(el);
    // @ts-ignore
    window.stop = (ev) => {
      ev.stopPropagation();
    };
    // @ts-ignore
    window.setData = () => {
      const { graphModel, model } = this.props;
      graphModel.eventCenter.emit('custom:laptop-click', model);
    };
  }
}

class laptopNodeModel extends HtmlNodeModel {
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.strokeWidth = 0.1;
    return style;
  }
  initNodeData(data) {
    super.initNodeData(data);
    this.text.editable = false;
    this.width = 120;
    this.height = 100;
    const target1 = {
      message: '笔记本电脑不能连接互联网',
      validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
        return targetNode.type != 'web-node'
      },
    }
    this.sourceRules.push(target1)
  }
  setAttributes() {
    let that = this;
  }
}

export default {
  type: 'laptop-node',
  view: laptopNode,
  model: laptopNodeModel,
};