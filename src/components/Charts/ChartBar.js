import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {

    let BarFillHeight = '0%'; 

    if(props.maxValue > 0) {
        BarFillHeight = Math.round((props.value / props.maxValue) * 100) +'%';
    }
    console.log( props.value, props.maxValue)

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill " style={{height:BarFillHeight }} >
            </div>
        </div>
        <div className="hart-bar__label"> {props.label}</div>

    </div>

};



export  default  ChartBar;