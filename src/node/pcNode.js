import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class pcNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1730541155312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    p-id="14328" width="64" height="64">
    <path
        d="M554.666667 682.666667v85.333333h128v42.666667H384v-42.666667h128v-85.333333H170.666667V213.333333h725.333333v469.333334h-341.333333z m0-42.666667h298.666666V256H213.333333v384h341.333334z"
        fill="#1296db" p-id="14329"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>电脑</div>
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
      graphModel.eventCenter.emit('custom:pc-click', model);
    };
  }
}

class pcNodeModel extends HtmlNodeModel {
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
      message: '台式电脑不能指向连接其他设备',
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
  type: 'pc-node',
  view: pcNode,
  model: pcNodeModel,
};