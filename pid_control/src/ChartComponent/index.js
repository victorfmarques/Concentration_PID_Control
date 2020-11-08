import React, { useEffect } from 'react'
import Chart from "chart.js";
import './index.css'

const ChartComponent = () =>{

    const chartRef = React.createRef();
    
    useEffect(()=>{
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(
            myChartRef,
            {
                type: "line",
                data: {
                    //Bring in data
                    labels: ["-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0"],
                    datasets: [
                        {
                            label: "Concentração",
                            data: [86, 67, 91,],
                        }
                    ]
                },
                options: {
                    //Customize chart options
                }
            }
        )
    },[]) 
        

    return (
        <React.Fragment>
            <div className="ChartWrapper">
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        </React.Fragment>
    )
}

export default ChartComponent