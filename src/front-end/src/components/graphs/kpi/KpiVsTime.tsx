import React from 'react'
import "../../../styles/kpiGraph.css";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from 'chart.js'
import { Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);


type KpiProps = {
    title : String
    xData: String[]
    yData: String[]
}

const options = {
    responsive : true,
};

const KpiVsTime = (props: KpiProps) => {
    const labels = props.xData;
    const data = {
        labels,
        datasets: [{
            data: props.yData,
            borderColor: '#2222A8',
            backgroundColor: '#2222A8',
        }]
    }

    return (
            <div className="kpi-graph-card">
            <div id="kpi-graph-title-div"><span id="kpi-graph-title">{props.title}</span></div>
            <div> 
                <Line
                    options = {options}
                    data = {data}  
                />
            </div>
            </div>
    )
}

export default KpiVsTime;