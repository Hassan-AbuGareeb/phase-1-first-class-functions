function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function func(fun){

    }
}

function returnsAnAnonymousFunction()
{
    return function (fun){

    }
}