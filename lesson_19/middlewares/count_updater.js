import * as Constants from '../action';

export default (store) => (next) => (payload) => {
    if(payload.type === Constants.ADD) {
        //next(payload);
        next({ type: ConstantSourceNode.COUNTER_INCREMENT });
    }
    //console.log(stlre, next, payload);
    console.log(payload.type, payload);
    //console.log(store.getState().counter.count);
    next(payload);
}



/*
export default function(store) {
    console.log('1');
    return function (next) {
        console.log('2');
        return function(payload) {
            console.log('3');

        }
    }
}
*/