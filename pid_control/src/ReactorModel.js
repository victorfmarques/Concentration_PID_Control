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
    }

    p;
    i;
    d;
    vazaoE;
    vazaoS;
    concentracaoE;
    concentracaoI;
    volume;

    getConcentration(){
        return this.p + this.i + this.d
    }
}




export default ReactorModel