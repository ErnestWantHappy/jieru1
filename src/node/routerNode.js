import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class routerNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1730542681463" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    p-id="15756" width="64" height="64">
    <path d="M352 435.2h320v48H352z" fill="#1296db" p-id="15757"></path>
    <path
        d="M896 435.2h-96v48h64l28.8 73.6H768V144h-64v412.8H320V144H256v412.8H131.2l28.8-73.6h64v-48H131.2L64 556.8V883.2h896V556.8l-64-121.6z m0 380.8H128v-192h768v192z"
        fill="#1296db" p-id="15758"></path>
    <path d="M768 688h64v64h-64zM640 688h64v64h-64zM512 688h64v64h-64z" fill="#1296db" p-id="15759"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>光猫路由器</div>
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
      graphModel.eventCenter.emit('custom:router-click', model);
    };
  }
}

class routerNodeModel extends HtmlNodeModel {
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
  }
  setAttributes() {
    let that = this;
  }
}

export default {
  type: 'router-node',
  view: routerNode,
  model: routerNodeModel,
};