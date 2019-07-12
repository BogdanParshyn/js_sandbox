import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

var validSt = require("./style.css");

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          email:'',
          password:''
        };
    }
    
    render() {
        return (
        <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> ducawizard@gmail.com
                </label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password </label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="button"> SIGN UP
                </button>
            </form>
        )
    }
}

ReactDOM.render( <
    Signin / > ,
    document.getElementById('app')
);

/*
export default class button extends Component {
    render() {
       let className = styles.button
       let text = "Отправить заявку"

       if (this.state.loading) {
           className = styles.buttonDisabled
       }

       return <button className={className}>{text}</button>
   }
}

ReactDOM.render((
    <div class="Onboarding1"></div>
), document.getElementById('root'));
*/