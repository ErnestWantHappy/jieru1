import { HtmlNode, HtmlNodeModel } from '@logicflow/core';

class switchNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement('div');
    el.className = 'uml-wrapper';
    const icon=`<svg t="1730541007071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
    p-id="11330" width="64" height="64">
    <path
        d="M984.064 637.44c0-2.048 0-4.096-0.496-5.632L902.144 133.632c-3.072-18.944-11.76-37.376-24.064-49.664a73.328 73.328 0 0 0-53.248-22.016H199.68A79.52 79.52 0 0 0 144.384 84.48a78.4 78.4 0 0 0-22.016 52.736L40.96 628.736c-0.512 3.584-1.024 6.144-1.024 9.216v209.92c2.56 37.872 26.624 70.656 66.048 80.896l0.512 0.512h2.048l1.024 0.496 1.024 0.528h1.024l0.512 0.496h1.536l5.632 0.512 2.56 0.512h1.024l1.024 0.496h773.12c48.128 0 87.024-39.408 87.024-87.552V637.44h0.016z m-806.4-512c0.512-2.048 0.512-4.096 0.512-6.144 0-1.536 0.512-2.56 1.536-3.584s2.56-2.048 4.096-2.048H844.8c0.512 0 1.008 0 1.552 1.024 2.56 2.56 4.096 6.144 4.592 10.752l67.6 447.744c-2.56-0.512-4.608-0.512-6.656-0.512H122.368c-2.048 0-4.608 0-6.656 0.512L177.664 125.44z m754.672 728.576a14.864 14.864 0 0 1-14.848 14.864H105.984c-7.168-0.528-13.312-5.12-14.336-12.816v-0.496h-0.512v-215.04a15.2 15.2 0 0 1 15.36-14.336h810.496a12.96 12.96 0 0 1 10.24 4.608c2.544 2.56 4.608 6.16 4.608 9.728v213.504h0.496z"
        fill="#1296db" p-id="11331"></path>
    <path
        d="M783.232 760.832h95.104v48.64h-95.104zM783.232 685.568h95.104v48.656h-95.104zM624.128 760.832h95.104v48.64h-95.104zM624.128 685.568h95.104v48.656h-95.104zM458.432 760.832h95.12v48.64h-95.12zM458.432 685.568h95.12v48.656h-95.12zM299.328 760.832h95.104v48.64h-95.104zM299.328 685.568h95.104v48.656h-95.104zM430.592 489.984c8.192 0 16.384-14.848 21.504-21.504l43.52-65.024-43.52-43.52-43.008 65.024H322.56c-15.36 0-21.504 14.848-21.504 30.72s6.144 34.304 21.504 34.304h108.032z"
        fill="#1296db" p-id="11332"></path>
    <path
        d="M712.192 424.96H604.16l-151.552-216.576c-5.12-0.512-13.312 0-21.504 0h-87.04v-43.52l-86.528 87.04 86.528 65.024v-43.52h84.992L560.64 468.48c5.104 6.656 13.312 21.504 21.504 21.504h123.392c15.376 0 28.16-13.312 28.16-29.696 0.528-16.384-5.632-35.328-21.504-35.328z"
        fill="#1296db" p-id="11333"></path>
    <path
        d="M690.688 208.384H604.16c-8.704 0-28.16 9.216-33.776 15.872l-53.264 49.152 43.52 43.52 43.52-43.52h86.528v43.52l86.528-65.024-86.528-86.528v43.008z"
        fill="#1296db" p-id="11334"></path>
    <path d="M198 741.888m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#1296db" p-id="11335"></path>
</svg>
`
    const html = `
      <div>
        <div class="uml-headExport">
                    ${icon}
                    <div>交换机</div>
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
      graphModel.eventCenter.emit('custom:switch-click', model);
    };
  }
}

class switchNodeModel extends HtmlNodeModel {
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
      message: '交换机不能连接互联网',
      validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
        return targetNode.type != 'web-node'
      },
    }
    this.sourceRules.push(target1)
    const target2 = {
      message: '交换机不能连接光猫路由器',
      validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
        return targetNode.type != 'router-node'
      },
    }
    this.sourceRules.push(target2)
    const target3 = {
      message: '交换机不能连接手机',
      validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
        return targetNode.type != 'phone-node'
      },
    }
    this.sourceRules.push(target3)
    const target4 = {
      message: '交换机不能连接平板电脑',
      validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
        return targetNode.type != 'tablet-node'
      },
    }
    this.sourceRules.push(target4)
  }
  setAttributes() {
    let that = this;
  }
}

export default {
  type: 'switch-node',
  view: switchNode,
  model: switchNodeModel,
};