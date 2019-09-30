import React, { Component } from 'react'
// var CanvasJSReact = require('./canvasjs.react');
import  CanvasJSReact from './assets/canvasjs.react';
import './styles.css';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Graph extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const options = {
			theme: "light2",
			title: {
				text: ""
			},
			subtitles: [{
				text: ""
			}],
			axisY: {
				includeZero: false,
				prefix: "$",
			},
			axisX:{
				interval:3,
				intervalType:"month"
			},
			toolTip: {
				shared: true
			},
			data: [
			{
				type: "area",
				name: " ",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "₹#,##0.##",
				dataPoints: [
					{ x: new Date("2017- 01- 01"), y: 84.927},
					{ x: new Date("2017- 02- 01"), y: 82.609},
					{ x: new Date("2017- 03- 01"), y: 81.428},
					{ x: new Date("2017- 04- 01"), y: 83.259},
					{ x: new Date("2017- 05- 01"), y: 83.153},
					{ x: new Date("2017- 06- 01"), y: 84.180},
					{ x: new Date("2017- 07- 01"), y: 84.840},
					{ x: new Date("2017- 08- 01"), y: 82.671},
					{ x: new Date("2017- 09- 01"), y: 87.496},
					{ x: new Date("2017- 10- 01"), y: 86.007},
					{ x: new Date("2017- 11- 01"), y: 87.233},
					{ x: new Date("2017- 12- 01"), y: 86.276}
				]
			},
			
			]
		}
        return (
            <>
                <CanvasJSChart options = {options}/>
            </>
        )
    }
}

export default Graph
