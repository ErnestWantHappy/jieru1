import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class webNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1730539800192" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9000"
    width="64" height="64">
    <path
        d="M505.573222 505.573222m-464.870293 0a464.870293 464.870293 0 1 0 929.740586 0 464.870293 464.870293 0 1 0-929.740586 0Z"
        fill="#82DDFF" p-id="9001"></path>
    <path
        d="M505.573222 1002.577406C231.526828 1002.577406 8.569038 779.6239 8.569038 505.573222 8.569038 231.526828 231.526828 8.569038 505.573222 8.569038c274.050678 0 497.004184 222.957791 497.004184 497.004184 0 274.050678-222.953506 497.004184-497.004184 497.004184z m0-929.740586C266.964084 72.83682 72.83682 266.964084 72.83682 505.573222s194.127264 432.736402 432.736402 432.736401 432.736402-194.127264 432.736401-432.736401S744.18236 72.83682 505.573222 72.83682z"
        fill="#5D9EB8" p-id="9002"></path>
    <path
        d="M505.573222 981.823197c-136.016335 0-209.405858-250.725757-209.405858-486.62708C296.167364 259.29051 369.556887 8.569038 505.573222 8.569038c136.01205 0 209.405858 250.721473 209.405857 486.627079S641.585272 981.823197 505.573222 981.823197zM505.573222 72.83682c-68.513741 0-145.138075 180.626745-145.138076 422.359297 0 117.502929 17.660787 227.486527 49.726126 309.697875 27.51518 70.544603 63.183799 112.661423 95.41195 112.661422 68.509456 0 145.138075-180.626745 145.138075-422.359297 0-117.502929-17.660787-227.486527-49.721841-309.697874C573.469992 114.95364 537.801372 72.83682 505.573222 72.83682z"
        fill="#5D9EB8" p-id="9003"></path>
    <path
        d="M505.90313 691.277121c-127.661523 0-248.146477-17.857874-339.25677-50.274544C36.534092 594.699782 9.224569 535.414895 9.224569 493.83364c0-41.581255 27.313808-100.866142 157.421791-147.164653 91.114577-32.420954 211.595247-50.278828 339.25677-50.278828s248.142192 17.85359 339.25677 50.278828c130.112268 46.302795 157.421791 105.587682 157.42179 147.164653 0 41.581255-27.309523 100.866142-157.42179 147.168937-91.114577 32.416669-211.595247 50.274544-339.25677 50.274544z m0-330.61918c-120.506377 0-233.33918 16.533958-317.709925 46.559867-84.572117 30.09446-114.700854 64.477724-114.700854 86.615832 0 22.142393 30.133021 56.521372 114.700854 86.615833 84.370745 30.025908 197.203548 46.559866 317.709925 46.559866s233.33918-16.533958 317.70564-46.559866C908.176603 550.359297 938.309623 515.976033 938.309623 493.83364c0-22.138109-30.133021-56.521372-114.700853-86.615832-84.36646-30.025908-197.199264-46.559866-317.70564-46.559867z"
        fill="#5D9EB8" p-id="9004"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>互联网</div>
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
      graphModel.eventCenter.emit('custom:web-click', model);
    };
  }
}

class webNodeModel extends HtmlNodeModel {
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
  type: 'web-node',
  view: webNode,
  model: webNodeModel,
};