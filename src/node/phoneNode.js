import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class phoneNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1733490960815" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    p-id="13198" width="64" height="64">
    <path
        d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z"
        fill="#1296db" p-id="13199"></path>
    <path
        d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z"
        fill="#1296db" p-id="13200"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>手机</div>
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
      graphModel.eventCenter.emit('custom:phone-click', model);
    };
  }
}

class phoneNodeModel extends HtmlNodeModel {
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
        message: '手机不能指向连接其他设备',
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
  type: 'phone-node',
  view: phoneNode,
  model: phoneNodeModel,
};