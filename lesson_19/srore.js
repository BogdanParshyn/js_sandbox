import { createStore, combineReducers, applyMiddleware } from 'redux';
import studentsReducer from './reducers/students';
import counterReducer from './reducers/counter';
import loggerMiddlewares from './middlewares/logger';
import countUpdaterMiddlewart from './middlewares/count_updater';
import storageMiddlewart from './middlewares/srorage';

export const Store = createStore(
    combineReducers({
        students: studentsReducer,
        counter: counter
    }),
    applyMiddleware(
        loggerMiddlewares, 
        countUpdaterMiddlewart,
        storageMiddlewart
    ),
);

//console.log(Store.getState);


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