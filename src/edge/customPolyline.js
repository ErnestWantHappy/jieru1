// 直线
import { PolylineEdge, PolylineEdgeModel } from "@logicflow/core";
class CustomPolyline extends PolylineEdge { }

class CustomPolylineModel extends PolylineEdgeModel {
    getEdgeStyle() {
        const style = super.getEdgeStyle();
        return style;
    }
    // initEdgeData(data) {
    //     console.log(data);
        
        
    //    console.log("111111111");
    //    super.initEdgeData(data);
    //    this.offset = 20;
    //    const style = super.getEdgeStyle();
    //     style.stroke = "orange";
    //    return style;
    // }
    setAttributes() {
        console.log(this.properties.lineColor);
        if(this.properties.lineColor=="wireless"){
            this.style.stroke = '#000000';
            this.style.strokeDasharray = '5, 5';// 设置为虚线，有虚线模式
        }else{
            this.style.stroke = this.properties.lineColor;
            this.style.strokeDasharray = 'none'; // 设置为实线，没有虚线模式
        }  
      }
 }


export default {
    type: "customPolyline",
    model: CustomPolylineModel,
    view: CustomPolyline,
};