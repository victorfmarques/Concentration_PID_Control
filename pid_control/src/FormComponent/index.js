import React, { useState } from 'react'

const FormComponent =  ({viewModel}) =>{
    
    const [p, setP] = useState(0);
    const [i, setI] = useState(0);
    const [d, setD] = useState(0);

    function handleP(input){
        let value = input.target.value;
        setP(value);
        viewModel.p = parseFloat(value);
    }

    function handleI(input){
        let value = input.target.value;
        setI(value);
        viewModel.i = parseFloat(value);
    }

    function handleD(input){
        let value = input.target.value;
        setD(value);
        viewModel.d = parseFloat(value);
    }

    return (
        <React.Fragment>
            <form className="container-fluid">
                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="p">P</label>
                    <input type="text" id="p" name="p" className="form-control" onChange={handleP} value={viewModel.p}/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="i">I</label>
                    <input type="text" id="i" name="i" className="form-control" onChange={handleI} value={viewModel.i}/>
                </div>

                <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <label htmlFor="d">D</label>
                    <input type="text" id="d" name="d" className="form-control" onChange={handleD} value={viewModel.d}/>
                </div>
            </form>
        </React.Fragment>
    )
}

export default FormComponent