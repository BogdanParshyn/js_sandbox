import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

function User({ firstName, lastName, age, children }) {
    const addition = children
    ? <div style={{ border: "1px dashed red"}}>{children}</div>
    : null;

    return (
        <div style={{ border: '${Math.random() *5}px solid black', marginTop: '15px', padding: '5px'}}>
            {count += 1}
            <span>{firstName}</span>
            <span>{lastName}</span>
            <div>He(She) is {age} year old</div>
            <div style={{ border: '1px solid red'}}>{addition}</div>
        </div>
    )
}

window.render = function render() {

ReactDOM.render((
    <div className="asd">
        <User firstName="Ivan" lastName="Vanovsky" age={29}>
            Some additional information
        </User>
        <User firstName="Aglena" lastName="Hilivna" age={18}>
            <span>The some image</span>
            <img src="https://a-level.pl.ua/wp-content/themes/alevel/images/logo.png"></img>
        </User>
        <User firstName="H" lastName="B" age={180} />
        
        {/*а так в JS нужно написть:
        {user('Ivan', 'Vanovsky', 29)}
        {user('Aglena', 'Hilivna', 18)}
        {user('H', 'B', 180)}
        */}

    </div>
), document.getElementById('root'));

}
/*
ReactDOM.render((
    <div>
        Hello Alevel {someValue + 5}
        <br/>
        <a href="https://google.com">Some link</a>

    </div>
), document.getElementById9('root'));
*/

window.render2 = function render2() {

    ReactDOM.render((
        <div className="asd">
            
            <User firstName="H" lastName="B" age={90} />
    
        </div>
    ), document.getElementById9('root'));
    
}

    // Создать две функции: круг и квадрат. И с помощью атрибута задать цвет.