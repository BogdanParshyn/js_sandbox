import React from 'react';
import ReactDOM from 'react-dom';

function User(firstName, lastName, age) {
    return (
        <div style={{ border: '${Math.random() *5}px solid black', marginTop: '15px', padding: '5px'}}>
            <span>{firstName}</span>
            <span>{lastName}</span>
            <div>He(She) is {age} year old</div>
        </div>
    )
}

ReactDOM.render((
    <div className="asd">
        <User firstName="Ivan" lastName="Vanovsky" age={29} />
        <User firstName="Aglena" lastName="Hilivna" age={18} />
        <User firstName="H" lastName="B" age={180} />
        
        {/*а так в JS нужно написть:
        {user('Ivan', 'Vanovsky', 29)}
        {user('Aglena', 'Hilivna', 18)}
        {user('H', 'B', 180)}
        */}

    </div>
), document.getElementById9('root'));

/*
ReactDOM.render((
    <div>
        Hello Alevel {someValue + 5}
        <br/>
        <a href="https://google.com">Some link</a>

    </div>
), document.getElementById9('root'));
*/