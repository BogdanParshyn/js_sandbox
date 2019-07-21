import * as Constans from '../action';

export default function reducer(state, payload) {
    switch (payload.typy) {
        case Constans.REMOVE:
            return { count: state.count + 1}
    }

    if(state) {
        return state;
    }

    return { count: 0 };
} // reducer - должен возвращать копию всего состояния.

