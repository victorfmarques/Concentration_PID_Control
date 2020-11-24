const CONSTANT = 1000

class PIDModel {
    constructor (data){
        this.kP = data.kP ?? 0;
        this.kI = data.kI ?? 0;
        this.kD = data.kD ?? 0;
        this.sumError = 0;
        this.lastError = 0;
        this.p = data.p ?? 0;
        this.i = data.i ?? 0;
        this.d = data.d ?? 0;
    }

    update(setPoint, measure){
        var error = setPoint - measure


        if (error > CONSTANT / (this.kP + 1)){
            this.p = CONSTANT
        } else if (error < -(CONSTANT / (this.kP + 1))){
            this.p = -CONSTANT
        } else {
            this.p = this.kP *  error
        }

        var tmp_error = this.sumError + error

        if (tmp_error > (CONSTANT / (this.kI + 1))){
            this.i = CONSTANT
            this.sumError = CONSTANT / (this.kI + 1)
        } else if (tmp_error < -(CONSTANT / (this.kI + 1))) {
            this.i = -CONSTANT
            this.sumError = CONSTANT / (this.kI + 1)
        } else {
            this.sumError = tmp_error
            this.i = this.kI * this.sumError
        }

        this.d = this.kD * (this.lastError - error)
        this.lastError = error

        var output = (this.p + this.i + this.d)

        if (output > CONSTANT) {
            output = CONSTANT
        } else if (output < -CONSTANT){
            output = -CONSTANT
        }

        return output
    }
}




export default PIDModel