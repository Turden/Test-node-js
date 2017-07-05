'use strict';

class Mathematic {
    sum(req){
        let a = +req.a;
        let b = +req.b;
        let c = a + b;
        return 'a+b= '+ c;
    };
    min(req){
        let a = +req.a;
        let b = +req.b;
        let c = a - b;
        return 'a-b= '+ c;
    };
    mul(req){
        let a = +req.a;
        let b = +req.b;
        let c = a + b;
        return 'a*b= '+ c;
    };
    div(req){
        let a = +req.a;
        let b = +req.b;
        if (b === 0)
        {
            return ('b must be != 0');
        }else {
            let c = a/b;
            return ('a/b= '+ c);
        };
    };
}


module.exports = Mathematic;