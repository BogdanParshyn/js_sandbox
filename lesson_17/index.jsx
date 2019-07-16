import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt } from "react-router-dom"; 
//import { HashRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom"; 
//import { MemoryRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom"; 
// Router это наш реакт компонент
// Route это наш реакт компонент одни роут это одна страничка

/*
function Home() {
    return (
        <div>Home Page</div>
    )
}

function About() {

    const info = ['arseniy', 'lidiya', 'paulo'];

    return (
        <div>
            About use
            <Rout path="/about/us" component={() => <div>We are Alevel</div>} />
            <Rout path="/about/me" component={() => <div>I am Mikhail</div>} />
            {info.map((name) => 
                <Rout path={`/about/${name}`} key={name} component={() => <div>I am {name}</div>} />
            )}
        </div>
    )
}

function NotFound() {
    return (
        <div>Not Found</div>
    )
}

ReactDOM.render((
    <Router>
        <nav>
            <Link to="/">Home</Link> // Переключаемся между этими двумя страницами (ссылками)
            <Link to="/About">About</Link> // Переключаемся между этими двумя страницами (ссылками)
        </nav>
        <Switch>

            
            <Route path="/" exact component={Home}></Route> // {Home} это индекс
            <Route path="/about" component={About}></Route>
            <Route path="*" component={NotFound}></Route>
        </Switch>
    </Router>
), document.getElementById('root'));
*/


function Home(props) {
    console.log(props);
    setTimeout(() => props.history.push('./info'), 3000); {/*пуш добавляет реплейс заменяет*/}

    return (
        <div>Home Page</div>
    )
}

function About() {

    const info = ['arseniy', 'lidiya', 'paulo'];

    return (
        <div>
            About use
            <Rout path="/info/us" component={() => <div>We are Alevel</div>} />
            <Rout path="/info/me" component={() => <div>I am Mikhail</div>} />
            {info.map((name) => 
                <Rout path={`/about/${name}`} key={name} component={() => <div>I am {name}</div>} />
            )}
            <Prompt 
                when={true} 
                message="Are you sure you want to leave?"  
            /> {/* мтожно и false */}
        </div>
    )
}

function NotFound() {
    return (
        <div>Not Found</div>
    )
}

const activstyle = {
    color: 'lightgreen',
}

ReactDOM.render((
    <Router>
        <nav>
            <NavLink exact activeStyle={activstyle} to="/">Home</NavLink> {/* Переключаемся между этими двумя страницами (ссылками) */}
            <NavLink activeStyle={activstyle} to="/info">About</NavLink> {/* Переключаемся между этими двумя страницами (ссылками) */}
        </nav>
        <Switch>

            <Route path="/" exact component={Home}></Route> // {/* {Home} это индекс*/}
            <Route path="/info" component={About}></Route>
            <Redirect from="/about" to="/info" /> {/* Перенаправляет на старый роут, это если поменяли */}
            <Redirect to="/" />
        </Switch>
    </Router>
), document.getElementById('root'));


// =====================================================

function Home(props) {
    console.log(props);
    setTimeout(() => props.history.push('./info'), 3000); {/*пуш добавляет реплейс заменяет*/}

    return (
        <div>Home Page</div>
    )
}

function About() {

    const info = ['arseniy', 'lidiya', 'paulo'];

    return (
        <div>
            About use
            <Rout path="/info/us" component={() => <div>We are Alevel</div>} />
            <Rout path="/info/me" component={() => <div>I am Mikhail</div>} />
            {info.map((name) => 
                <Rout path={`/about/${name}`} key={name} component={() => <div>I am {name}</div>} />
            )}
            <Prompt 
                when={true} 
                message="Are you sure you want to leave?"  
            /> {/* мтожно и false */}
        </div>
    )
}

function NotFound() {
    return (
        <div>Not Found</div>
    );
}

function Items(props) {
    console.log(props);

    fetch(`serverad...`)
    return (
        <div>Items</div>
    );
}

const activstyle = {
    color: 'lightgreen',
}

ReactDOM.render((
    <Router>
        <nav>
            <NavLink exact activeStyle={activstyle} to="/">Home</NavLink> {/* Переключаемся между этими двумя страницами (ссылками) */}
            <NavLink activeStyle={activstyle} to="/info">About</NavLink> {/* Переключаемся между этими двумя страницами (ссылками) */}
        </nav>
        <Switch>

            <Route path="/" exact component={Home}></Route> // {/* {Home} это индекс*/}
            <Route path="/info" component={About}></Route>
            <Route path="/items/:category/:subcategory" component={Items}></Route>
            <Route path="/items/:id" component={Items}></Route>
            <Redirect from="/about" to="/info" /> {/* Перенаправляет на старый роут, это если поменяли */}
            <Redirect to="/" />
        </Switch>
    </Router>
), document.getElementById('root'));