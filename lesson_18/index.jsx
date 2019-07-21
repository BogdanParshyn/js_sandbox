import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Store } from './srore';
import * as Constans from './action';
// Redux //

function List(props) {
    let newName
    return (
        <div>
            {props.count}
            <button onClick="">Increment</button>
            {props.list.map(student => (
                <div 
                    key={student.name} 
                    onClick={props.remuve.bind(null, student.name)}
                >
                    {student.name}
                </div>
                ))}
                <input onChange={(event) => newName = event.target.value} />
                <button onClick={() => props.add(newName)}>Add student</button>
        </div>
    );
}

const ListConnected = connect(
    (state) => ({ 
        list: state.students,
        count: state.counter.count, 
    }),
    (dispatch) => ({ 
        remuve: (name) => dispatch ({ type: 'REMOVE', name }),
        add: (name) => dispatch ({ type: 'ADD', name }),
        increment: () => dispatch ({ type: 'COUNTER_INCREMENT'})
    }),
    
    )(List);

ReactDOM.render((
    <Provider store={Store}>
        <ListConnected />
    </Provider>
), document.getElementById('root'));
