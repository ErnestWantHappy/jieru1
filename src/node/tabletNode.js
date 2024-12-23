import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class tabletNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1733491414577" class="icon" viewBox="0 0 1408 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    p-id="14347" width="64" height="64">
    <path d="M1228.8 513.6a0.75 0.775 0 1 0 96 0 0.75 0.775 0 1 0-96 0Z" p-id="14348" fill="#1296db"></path>
    <path
        d="M1280 1024c128 0 128-131.904 128-131.904L1408 131.904C1408 131.904 1408 0 1280 0L128 0C0 0 0 131.904 0 131.904l0 760.256C0 892.096 0 1024 128 1024L1280 1024zM1216 64l61.76 0C1344 64 1344 135.104 1344 135.104l0 753.792c0 0 0 71.104-66.176 71.104L1216 960 1216 64zM64 888.896 64 135.104C64 135.104 64 64 130.24 64L1152 64l0 896L130.24 960C64 960 64 888.896 64 888.896z"
        p-id="14349" fill="#1296db"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>平板电脑</div>
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
      graphModel.eventCenter.emit('custom:tablet-click', model);
    };
  }
}

class tabletNodeModel extends HtmlNodeModel {
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
        message: '平板电脑不能指向连接其他设备',
        validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
          return 0
        },
      }
      this.sourceRules.push(target1)
  }
  setAttributes() {
    let that = this;
  }
}

export default {
  type: 'tablet-node',
  view: tabletNode,
  model: tabletNodeModel,
};