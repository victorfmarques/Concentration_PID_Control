import React from 'react'
import './index.css';


const ReactorComponent = (props) =>{

    var {viewModel} = props

    function mudarVolume(){
        if(viewModel.volume === 100){
            document.getElementById("liquido").style.height='33%';
        }
        else if(viewModel.volume === 200){
            document.getElementById("liquido").style.height='66%';
        }
        else if(viewModel.volume === 300){
            document.getElementById("liquido").style.height='100%';
        }
    }

    function mudarconcentracao() {
        if(viewModel.getConcentration() > 0 && viewModel.getConcentration() <= 0.1){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #0000ff)';
        }
        else if(viewModel.getConcentration() > 0.1 && viewModel.getConcentration() <= 0.2){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #3000FF)';
        }
        else if(viewModel.getConcentration() > 0.2 && viewModel.getConcentration() <= 0.3){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #3F00FF)';
        }
        else if(viewModel.getConcentration() > 0.3 && viewModel.getConcentration() <= 0.4){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #4E00FF)';
        }
        else if(viewModel.getConcentration() > 0.4 && viewModel.getConcentration() <= 0.5){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #5D01FF)';
        }
        else if(viewModel.getConcentration() > 0.5 && viewModel.getConcentration() <= 0.6){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #6B01FF)';
        }
        else if(viewModel.getConcentration() > 0.6 && viewModel.getConcentration() <= 0.7){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #7B00FF)';
        }
        else if(viewModel.getConcentration() > 0.7 && viewModel.getConcentration() <= 0.8){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #8C00FF)';
        }
        else if(viewModel.getConcentration() > 0.8){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #9700FF)';
        }
    }

    document.onchange = (ev)=>{
        viewModel = props.viewModel;
        mudarVolume();
        mudarconcentracao();
    }; 

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className='reactorWrapper'>
                    <div className='reactor'>
                        <div id='liquido' className='reactorContent'>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ReactorComponent