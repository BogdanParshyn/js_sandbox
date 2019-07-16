import React from 'react';
import "./style.css"

export default class Email extends React.Component {  
    constructor(props) { 
        super(props)
    
        this.state = { // Метод.
            numberPage: 'stTwo'// Значение 2-й странички.
        }
    
    }

    onClick() {
        this.state = { 
            numberPage: 'stThree'// При вызове клика передаем другое значение в номер старинчки
        }
    }


    render() {
        return(
            <div className="Book">
                <div className="EllipseLeftUp" />
                <div className="EllipseRightUp" />
                <div className="EllipseCenter" />
                <div className="ReadBooks">Read Books</div>
                <div className="CreateYourBook">
                    Create your account to get started. After that, 
                    you can share books and make friends
                </div>

                <div className="EllipseStart">
                    <button onClick={this.onClick.bind(this)}>Go Next</button>
                </div>

                <div className="EllipseLeftDown" />
            </div>        
                


        )
    }
}
