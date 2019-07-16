import React from 'react';
import "./style.css"

export default class Email extends React.Component {  
    constructor(props) { 
        super(props)
    
        this.state = { // Метод.
            numberPage: 'stTwo'// Значение 2-й странички.
        }
    
    }

    onClick() { // Нажимаем на NEXT STEP - отправляем запрос и если все ок переходим на другую страничку.
        fetch('https://authserver.worldthirteen.now.sh/check_username?username=something', )
    }


    render() {
        return(
            <div className="Email">
                <div className="EllipseLeftUp23" />
                <div className="EllipseCenterUp23" />
                <div className="Welcome">Welcome!</div>
                <div className="CreateYour">
                    Create your account to get started. After that, 
                    you can share books and make friends. */
                </div>
                <div className="EllipseRighteCenter23"></div>

                <div className="nameType23">NAME</div>
                <div className="regName-Type23">input name</div>



                country

                age

                <div className="EllipseLeftDown" /><button onClick={this.onClick.bind(this)}>Go Next</button>
            </div>        
                


        )
    }
}
