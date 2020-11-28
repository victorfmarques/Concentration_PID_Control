import React, { useState } from 'react'

const FormComponent =  (props) =>{
    
    const {viewModel} = props

    const [vazaoE, setVazaoE] = useState(viewModel.vazaoE ?? 0);
    const [concetracaoE, setConcentracaoE] = useState(viewModel.concetracaoE ?? 0);
    const [concetracaoI, setConcentracaoI] = useState(viewModel.concetracaoI ?? 0);
    const [volume, setVolume] = useState(viewModel.volume ?? 0);
    const [p, setP] = useState(viewModel.kP ?? 0);
    const [i, setI] = useState(viewModel.kI ?? 0);
    const [d, setD] = useState(viewModel.kD ?? 0);

    function handleVazaoE(input){
        let value = input.target.value;
        if(value > 2)
            value = 2;
        const valueParsed = parseFloat(value ? value : 0);
        setVazaoE(valueParsed);
        viewModel.vazaoE = valueParsed;
        viewModel.vazaoS = valueParsed;
    }

    function handleConcentracaoE(input){
        let value = input.target.value;
        var valueParsed = parseFloat(value ? value : 0);
        if(valueParsed > 0.8)
            valueParsed = 0.8;
        setConcentracaoE(valueParsed);
        viewModel.concentracaoE = valueParsed;
    }

    function handleConcentracaoI(input){
        let value = input.target.value;
        var valueParsed = parseFloat(value ? value : 0);
        if(valueParsed > 0.3)
            valueParsed = 0.3;
        setConcentracaoI(valueParsed);
        viewModel.concentracaoI = valueParsed;
    }

    function handleVolume(input){
        let value = input.target.value;

        if(value > 100 && value < 200)
            value = 200;
        if(value > 200 || value > 300)
            value = 300;
        const valueParsed = parseFloat(value ? value : 0);
        setVolume(valueParsed);
        viewModel.volume = valueParsed;
    }

    
    function handleP(input){
        let value = input.target.value;
        const valueParsed = parseFloat(value ? value : 0);
        setP(valueParsed);
        viewModel.kP = valueParsed;
    }

    function handleI(input){
        let value = input.target.value;
        const valueParsed = parseFloat(value ? value : 0);
        setI(valueParsed);
        viewModel.kI = valueParsed;
    }

    function handleD(input){
        let value = input.target.value;
        const valueParsed = parseFloat(value ? value : 0);
        setD(valueParsed);
        viewModel.kD = valueParsed;
    }

    return (
        <React.Fragment>
            <form className="container-fluid">
                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="p">Vazão Entrada(L/s)</label>
                    <input type="number" id="vazaoEntrada" name="vazaoEntrada" className="form-control" min="1" max="2" onChange={handleVazaoE} value={vazaoE}/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="p">Concentração Final(kg/L)</label>
                    <input type="number" id="concetracaoE" name="concetracaoE" className="form-control" min="0" max="0.8" step=".1" onChange={handleConcentracaoE} value={concetracaoE}/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="p">Concentração Inicial(kg/L)</label>
                    <input type="number" id="concetracaoI" name="concetracaoI" className="form-control" min="0" max="0.3" step=".1" onChange={handleConcentracaoI} value={concetracaoI}/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="p">Volume(L)</label>
                    <input type="number" id="volume" name="volume" className="form-control" min="100" max="300" step="100" onChange={handleVolume} value={volume}/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="p">P</label>
                    <input type="number" id="p" name="p" className="form-control" onChange={handleP} value={p} step=".1"/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="i">I</label>
                    <input type="number" id="i" name="i" className="form-control" onChange={handleI} value={i} step=".1"/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="d">D</label>
                    <input type="number" id="d" name="d" className="form-control" onChange={handleD} value={d} step=".1"/>
                </div>
            </form>
        </React.Fragment>
    )
}

export default FormComponent