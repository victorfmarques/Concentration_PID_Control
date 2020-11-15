import React, {useEffect} from 'react'
import './index.css';


const ReactorComponent = (props) =>{

    var {viewModel} = props

    function mudarVolume(){
        if(viewModel.volume == 100){
            document.getElementById("liquido").style.height='20%';
        }
        else if(viewModel.volume == 200){
            document.getElementById("liquido").style.height='65%';
        }
        else if(viewModel.volume == 300){
            document.getElementById("liquido").style.height='100%';
        }
    }

    function mudarConcentracao() {
        if(viewModel.concentracao > 0 && viewModel.concentracao <= 0.1){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #0000ff)';
        }
        else if(viewModel.concentracao > 0.1 && viewModel.concentracao <= 0.2){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #3000FF)';
        }
        else if(viewModel.concentracao > 0.2 && viewModel.concentracao <= 0.3){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #3F00FF)';
        }
        else if(viewModel.concentracao > 0.3 && viewModel.concentracao <= 0.4){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #4E00FF)';
        }
        else if(viewModel.concentracao > 0.4 && viewModel.concentracao <= 0.5){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #5D01FF)';
        }
        else if(viewModel.concentracao > 0.5 && viewModel.concentracao <= 0.6){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #6B01FF)';
        }
        else if(viewModel.concentracao > 0.6 && viewModel.concentracao <= 0.7){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #7B00FF)';
        }
        else if(viewModel.concentracao > 0.7 && viewModel.concentracao <= 0.8){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #8C00FF)';
        }
        else if(viewModel.concentracao > 0.8){
            document.getElementById("liquido").style.backgroundImage='linear-gradient(white, #9700FF)';
        }
    }

    useEffect(()=>{
        viewModel = {props};

        mudarVolume();
        mudarConcentracao();
    }, [props]); 

    return (
        <React.Fragment>
            <div className='reactorWrapper'>
                <div className='reactor'>
                    <div id='liquido' className='reactorContent'>

                    </div>
                </div>
            </div>
            {/* <button onClick={mudarVolume}>Mudar</button>
            <button onClick={mudarConcentracao}>Mudar</button> */}
        </React.Fragment>
    )
}

export default ReactorComponent