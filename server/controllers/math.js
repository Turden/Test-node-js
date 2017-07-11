'use strict';
let promise = (a,b) => new Promise((result,reject)=>{
    if (isNaN(a) || isNaN(b)) {
        reject(new Error('a & b not a number'));
    } else {
        result([a, b])
    }
});
class Mathematic {
    sum(req){
        promise(+req.a,+req.b)
            .then(result=>result[0]+result[1])
            .then(result=>console.log("%s + %s = %s",req.a,req.b,result))
            .catch(err=>{throw new Error(err)});
        return "OK"
    };
    min(req){
        promise(+req.a,+req.b)
            .then(result=>result[0]-result[1])
            .then(result=>console.log("%s - %s = %s",req.a,req.b,result))
            .catch(err=>{throw new Error(err)});
        return "OK"
    };
    mul(req){
        promise(+req.a,+req.b)
            .then(result=>result[0]*result[1])
            .then(result=>console.log("%s * %s = %s",req.a,req.b,result))
            .catch(err=>{throw new Error(err)});
        return "OK"
    };
    div(req){
        promise(+req.a,+req.b)
            .then(result=>result[0]/result[1])
            .then(result=>console.log("%s / %s = %s",req.a,req.b,result))
            .catch(err=>{throw new Error(err)});
        return "OK"
    };
}


module.exports = Mathematic;