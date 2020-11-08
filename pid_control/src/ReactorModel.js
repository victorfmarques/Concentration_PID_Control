class ReactorModel {
    constructor (data){
        this.p = data.p;
        this.i = data.i;
        this.d = data.d;
    }

    p;
    i;
    d;

    getConcentration(){
        return this.p + this.i + this.d
    }
}




export default ReactorModel