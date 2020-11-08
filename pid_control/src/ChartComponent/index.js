import React, { useEffect, useState } from 'react'
import Chart from "chart.js";
import './index.css'

const ChartComponent = (props) =>{

    const {model} = props

    const [listModel, setListModel] = useState([])
    
    const chartRef = React.createRef();
    

    function handleChart(){
        const myChartRef = chartRef.current.getContext("2d");
        console.log(listModel)
        new Chart(
            myChartRef,
            {
                type: "line",
                data: {
                    //Bring in data
                    labels: listModel.map(item => listModel.indexOf(item).toString()),
                    datasets: [
                        {
                            label: "Concentração",
                            data: listModel ,
                        }
                    ]
                },
                options: {
                    scales:{
                        display: true
                    }
                }
            }
        )
    }


    useEffect(()=>{
        setListModel(listModel.concat(model))
        handleChart();
    },[model]) 
        

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