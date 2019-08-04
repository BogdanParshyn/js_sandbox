import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './srore';
import ListConnected from './components/students_list';
//import * as Constans from './action';


ReactDOM.render((
    <Provider store={Store}>
        <ListConnected />
    </Provider>
), document.getElementById('root'));

