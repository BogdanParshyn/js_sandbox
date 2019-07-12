import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

var validSt = require("./style.css");

class Signin extends React.Component {
    render() {
        return (
        <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in
                </button>
            </form>
        )
    }
}

ReactDOM.render( <
    Signin / > ,
    document.getElementById('app')
);




constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
}

this.state = {
  name:'',
  email:'',
  p







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
