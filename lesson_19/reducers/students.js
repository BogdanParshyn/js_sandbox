import * as Constans from '../action';

export default function reducer(state, payload) {
    switch (payload.type) {
        case Constans.REMOVE:
            return state.filter(std => std.name !== payload) 
        case Constans.ADD:
            return state.concat( { name: } )



        case Constans.SET:
            return payload.list;
    }

    if(state) {
        return state;
    }

    return { count: 0 };
} // reducer - должен возвращать копию всего состояния.

