


import React from 'react';
import { connect } from 'react-redux';
import * as Constans from '../../action';
// Redux //

class List extends React.Component{
    componentDidMount() {
        this.props.getList();
    }
    render() {
        const props = this.props;

        let newName = '';
            return (
                <div>
                    {props.count}
                    <button onClick={props.increment}>Increment</button>
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
} 

export default connect(
    (state) => ({ 
        list: state.students,
        count: state.counter.count, 
    }),
    (dispatch) => ({ 
        remuve: (name) => dispatch ({ type: 'REMOVE', name }),
        add: (name) => dispatch ({ type: 'ADD', name }),
        increment: () => dispatch ({ type: 'COUNTER_INCREMENT'}),
        getList: () => dispatch ({ type: 'Constants.GET'})
    }),
    
    )(List);

ReactDOM.render((
    <Provider store={Store}>
        <ListConnected />
    </Provider>
), document.getElementById('root'));
