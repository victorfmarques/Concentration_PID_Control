import React, {useEffect} from 'react'
import logo from './Tanque.png'; 
// import './index.css';


const ReactorComponent = (props) =>{

    const {model} = props
    // model.classe = 'vermelho';
    
    // function trocaClasse(){
    //     if(classe == 'vermelho'){
    //         classe = 'amarelo';
    //     } 
    //     else{
    //         classe = 'vermelho';
    //     }

    //     console.log(classe);
    //     // ReactDOM.render(button, document.body);
    // }

    // const button = <button className={model.classe}>Teste</button>;
    
    return (
        <React.Fragment>
            REACTOR
            {/* <canvas id="canvas" width="500" height="500"/> */}
            <img height="500" width="500" src={logo}/>
            {/* {button} */}
        </React.Fragment>
    )
}

export default ReactorComponent