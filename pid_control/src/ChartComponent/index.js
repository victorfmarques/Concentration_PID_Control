import React, { useEffect, useState } from 'react'
import Chart from "chart.js";
import './index.css'

const ChartComponent = (props) =>{

    const {viewModel} = props
    const chartConcentracaoRef = React.createRef();
    const chartTaxaEntradaRef = React.createRef();

    const countLimiter = 30 
    
    function drawChart(ref, chartLabel, ticks){
        const myChartRef = ref.current.getContext("2d");
        return new Chart(
            myChartRef,
            {
                type: "line",
                data: {
                    datasets: [
                        {
                            label: chartLabel
                        },
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks
                        }]
                    },
                    animation: {
                        duration: 0
                    }
                }
            }
        )
    }
    

    useEffect(()=>{
        var chartConcentração = drawChart(
            chartConcentracaoRef,
            "Concentração",
            {
                suggestedMin: 0,
                suggestedMax: 1
            }
        )

        var chartTaxaEntrada = drawChart(
            chartTaxaEntradaRef,
            "Taxa de Entrada",
            {
                suggestedMin: -10,
                suggestedMax: 10
            }
        )

        var countMeasures = -1

        setInterval(()=>{

            countMeasures ++

            if (chartConcentração != null){
                chartConcentração.data.labels.push(countMeasures.toString())
                chartConcentração.data.datasets[0].data.push(viewModel.getConcentration())
                if (chartConcentração.data.labels.length > countLimiter){
                    chartConcentração.data.labels.splice(0,1)
                    chartConcentração.data.datasets[0].data.splice(0,1)
                }
                chartConcentração.update();
            }

            if (chartTaxaEntrada != null){
                chartTaxaEntrada.data.labels.push(countMeasures.toString())
                chartTaxaEntrada.data.datasets[0].data.push(viewModel.taxaEntrada)
                if (chartTaxaEntrada.data.labels.length > countLimiter){
                    chartTaxaEntrada.data.labels.splice(0,1)
                    chartTaxaEntrada.data.datasets[0].data.splice(0,1)
                }
                chartTaxaEntrada.update();
            }


        } ,1000);
    },[])


    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="ChartWrapper">
                    <div className="chartAreaWrapper">
                        <canvas id="myChart" ref={chartConcentracaoRef} />
                    </div>
                    <div className="chartAreaWrapper">
                        <canvas id="myChart" ref={chartTaxaEntradaRef} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChartComponent