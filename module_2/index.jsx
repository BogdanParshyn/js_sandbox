import React from 'react';
import ReactDOM from 'react-dom';
import Book 
import Name
import Email
import Loading
import Welcome
import Fail






class SS extends React.Component {
    constructor(props) { 
        super(props);

        this.state = { // Метод.
            numberPage: 'stOne'// Стартовая страница приветсвия с которой и начинаем.
        }

        this.goNextPage = this.goNextPage.bind(this)
    }

    goNextPage(item) { // Значение следующей странички.
        this.setState({numberPage: item});
    }

    render() { //  Рендерим полученную страничку.
        if(this.state.numberPage === 'stOne') { 
            return (
                <Book numberPage={ this.goNextPage } />
            )

        } else if(this.state.numberPage === 'stTwo') {
            return (
                <Name numberPage={ this.goNextPage } />
            )

        } else if(this.state.numberPage === 'stThree') {
            return (
                <Email numberPage={ this.goNextPage } />
            )
        } else if(this.state.numberPage === 'stFour') {
            return (
                <Loading numberPage={ this.goNextPage } />
            )

        } else if(this.state.numberPage === 'stFive') {
            return (
                <Welcome numberPage={ this.goNextPage } />
            )

        } else if(this.state.numberPage === 'stSix') {
            return (
                <Fail numberPage={ this.goNextPage } />
            )
        }
    }
}

ReactDOM.render((
    <SS></SS>
), document.getElementById('root'));