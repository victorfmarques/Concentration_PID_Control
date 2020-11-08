import React, { useEffect, useState } from 'react'
import Chart from "chart.js";
import './index.css'

const ChartComponent = (props) =>{

    const {viewModel} = props
    const chartRef = React.createRef();

    
    function drawChart(){
        const myChartRef = chartRef.current.getContext("2d");
        return new Chart(
            myChartRef,
            {
                type: "line",
                data: {
                    //Bring in data
                    datasets: [
                        {
                            label: "Concentração"
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: -100,
                                suggestedMax: 100
                            }
                        }]
                    }
                }
            }
        )
    }

    useEffect(()=>{
        const chart = drawChart()

        var countMeasures = -1
        setInterval(()=>{
            console.log(chart)
            countMeasures ++
            if (chart != null){
                chart.data.labels.push(countMeasures.toString())
                chart.data.datasets[0].data.push(viewModel.getConcentration())
                chart.update();
            }
        } ,1000);

    },[])

    
    

    return (
        <React.Fragment>
            <div className="ChartWrapper">
                <div className="chartAreaWrapper">
                    <canvas id="myChart" ref={chartRef} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChartComponent