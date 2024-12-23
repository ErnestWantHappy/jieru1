import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class wirelessNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1730541098878" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    p-id="12869" width="64" height="64">
    <path
        d="M148.405 814.997c0 0 0 0 0 0 0 33.468 27.131 60.601 60.601 60.601 33.468 0 60.601-27.131 60.601-60.601 0 0 0 0 0 0 0 0 0 0 0 0 0-33.468-27.131-60.601-60.601-60.601-33.468 0-60.601 27.131-60.601 60.601s0 0 0 0z"
        fill="#1296db" p-id="12870"></path>
    <path
        d="M306.972 814.997c0 0 0 0 0 0 0 33.468 27.131 60.601 60.601 60.601 33.468 0 60.601-27.131 60.601-60.601 0 0 0 0 0 0 0 0 0 0 0 0 0-33.468-27.131-60.601-60.601-60.601-33.468 0-60.601 27.131-60.601 60.601s0 0 0 0z"
        fill="#1296db" p-id="12871"></path>
    <path
        d="M875.595 668.547h-338.346v-110.087c0-14.141-11.109-25.249-25.249-25.249s-25.249 11.109-25.249 25.249v110.087h-338.346c-58.579 0-106.048 47.47-106.048 106.048v80.798c0 58.579 47.47 106.048 106.048 106.048h727.191c58.579 0 106.048-47.47 106.048-106.048v-80.798c0-57.568-47.47-106.048-106.048-106.048zM931.143 855.395c0 30.299-25.249 55.55-55.55 55.55h-727.191c-30.299 0-55.55-25.249-55.55-55.55v-80.798c0-30.299 25.249-55.55 55.55-55.55h727.191c30.299 0 55.55 25.249 55.55 55.55v80.798zM599.869 381.712c6.061 0 13.13-2.020 18.18-7.069 10.1-10.1 10.1-26.259 0-35.349-28.278-28.278-66.659-44.441-107.058-44.441s-77.77 16.16-107.058 44.441c-10.1 10.1-10.1 26.259 0 35.349 10.1 10.1 26.259 10.1 35.349 0 19.188-19.188 44.441-29.289 70.7-29.289s52.519 10.1 70.7 29.289c6.061 5.050 13.13 7.069 19.188 7.069zM688.747 292.833c6.061 0 13.13-2.020 18.18-7.069 10.1-10.1 10.1-26.259 0-35.349-108.068-108.068-283.806-108.068-390.865 0-10.1 10.1-10.1 26.259 0 35.349 10.1 10.1 26.259 10.1 35.349 0 87.869-87.869 231.286-87.869 320.166 0 4.041 5.050 11.109 7.069 17.169 7.069z"
        fill="#1296db" p-id="12872"></path>
    <path
        d="M262.533 196.883c137.358-137.358 360.565-137.358 497.923 0 5.050 5.050 11.109 7.069 18.18 7.069s13.13-2.020 18.18-7.069c10.1-10.1 10.1-26.259 0-35.349-156.547-156.547-412.075-156.547-569.633 0-10.1 10.1-10.1 26.259 0 35.349 9.090 9.090 25.249 9.090 35.349 0z"
        fill="#1296db" p-id="12873"></path>
    <path
        d="M484.73 439.28c0 0 0 0 0 0 0 15.060 12.209 27.27 27.27 27.27 15.060 0 27.27-12.209 27.27-27.27 0 0 0 0 0 0 0-15.060-12.209-27.27-27.27-27.27-15.060 0-27.27 12.209-27.27 27.27z"
        fill="#1296db" p-id="12874"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>无线路由器</div>
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
      graphModel.eventCenter.emit('custom:wireless-click', model);
    };
  }
}

class wirelessNodeModel extends HtmlNodeModel {
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
      message: '无线路由器不能连接此设备',
      validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
        return targetNode.type != 'web-node'&&targetNode.type != 'router-node'
      },
    }
    this.sourceRules.push(target1)
  }
  setAttributes() {
    let that = this;
  }
}

export default {
  type: 'wireless-node',
  view: wirelessNode,
  model: wirelessNodeModel,
};