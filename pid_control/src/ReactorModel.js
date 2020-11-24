import PIDModel from './PID.js'

class ReactorModel {
    constructor (data){
        this.p = data.p ?? 0;
        this.i = data.i ?? 0;
        this.d = data.d ?? 0;
        this.vazaoE = data.vazaoE ?? 1;
        this.vazaoS = data.vazaoS ?? 1;
        this.concentracaoE = data.concentracaoE ?? 0;
        this.concentracaoI = data.concentracaoI ?? 0;
        this.volume = data.volume ?? 100;
        
        this.taxaEntrada = 0;
        this.concentracaoM = data.concentracaoM;

        this.pid = new PIDModel({});
    }

    getConcentration(){
        this.concentracaoM = this.concentracaoI + (this.taxaEntrada * this.vazaoE / this.volume);
        
        var output = this.pid.update(this.concentracaoE, this.concentracaoM)
        this.taxaEntrada = this.taxaEntrada + (output/5)

        return this.concentracaoM
    }
}

export default ReactorModel;