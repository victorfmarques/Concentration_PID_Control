import React, {useEffect} from 'react'


const ReactorComponent = (props) =>{

    const {model} = props

    var canvas = document.getElementById('canvas');

    function desenhaImagem(){
        var ctx = canvas.getContext("2d");
        var tanque = new Image();
        tanque.src = "tanque.png";

        ctx.drawImage(tanque, 0, 0, 500, 500);
    }

    useEffect(()=>{
        if (canvas)
        desenhaImagem();
    },[])

    
    return (
        <React.Fragment>
            REACTOR
            <canvas id="canvas" width="500" height="500"/>
        </React.Fragment>
    )
}

export default ReactorComponent