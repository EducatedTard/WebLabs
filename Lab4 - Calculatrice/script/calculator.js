/**
 * Created by Daniel on 1/28/2016.
 */

function calculator(){
    this.memory = 0;
    this.result = 0;
    this.add = function(x){
        this.result += x;
        return this;
    };

    this.substract = function(x){
        this.result -= x;
        return this;
    };

    this.multiply = function(x){
        this.result *= x;
        return this;
    };

    this.divide = function(x){
        this.result /= x;
        return this;
    }

    this.sin = function(){
        this.result = Math.sin(this.result);
        return this;
    };

    this.cos = function(){
        this.result = Math.cos(this.result);
        return this;
    };

    this.tan = function(){
        this.result = Math.tan(this.result);
        return this;
    };

    this.clear = function(){
        this.result = 0;
        return this;
    };

    this.memorize = function(){
        this.memory = this.result;
        return this;
    };

    this.factorial = function(){
        var compt = this.result;
        while(compt>1){
            compt -= 1;
            this.result *= compt;
        }
        return this;
    };



};