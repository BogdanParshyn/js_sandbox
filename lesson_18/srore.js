import { createStore, combineReducers } from 'redux';
import studentsReducer from './reducers/students';
import combineReducers from './reducers/counter';

export const Store = createStore(combineReducers({
    students: studentsReducer,
    counter: counter
}));

console.log(Store.getState);


/*
function reducer(state, payload) {
    console.log(state, payload)

    switch(payload.type) {
        case 'REMOVE':
            return state.filter( std => std.name !== payload.name );
        case 'ADD':
            return state.concat( { name: payload.name } );
    }

    if(state) {
        return state;
    }

    return [
        { name: 'John' },
        { name: 'Lina' },
        { name: 'Svetlana' },
        { name: 'SpaceInvaders' },
    ]; 
} // reducer - должен возвращать копию всего состояния.



console.log(store);

Store.dispatch({ type: 'ADD', name: 'Grigor' });
*/