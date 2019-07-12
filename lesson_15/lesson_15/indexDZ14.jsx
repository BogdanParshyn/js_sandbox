import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './styles.css';

class Emoji extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emoji: props.defaultEmoji || 'ввести эмоджи',
        }
    }

    render() {
        return (
            <div>{this.state.emoji}</div>
        );
    }
}

ReactDOM.render(
    <Emoji defaultEmoji = "ввести человечка" />,
    document.getElementById('root'),
)





// ================================================

render() {
    return (
        <div>
            {this.state.emoji}
            <button disabled={this.state.started}>Play</button>
            <button disabled={this.state.started}>Pause</button>
        </div>
    );
}

// Всегда делать очистку
// ================================================


//import Countries;

class CountrySelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCode: '',
        }

        console.log(countries);

    }

    

    onClick(code) {
        this.setState( {selectedCode: code} );
    }

    render() {
        return (
            <div style={{ fontSize: '14px'}}>
                {countries.map((country, key) => (
                    <div 
                        key = {Country.name + key}
                        onClick = { () => this.onClick(country.code) } // или так onClick = { this.onClick.bind(this, country.code) }
                        
                        style={{ 
                            backgraundColor: this.state.selectedCode === country.code}}
                            ? "Litegreen"
                            ?   ''
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <Emoji defaultEmoji = "ввести человечка" />,
    document.getElementById('root'),
)


//////

class CountrySelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCode: '',
            countries: [],
            error: false
        };

        

    }

ComponentWillMount() {
    fetch('/contries.json')
        .then(res => res.json())
        .then(res => this.setState({ countries }))
        .catch(() => this.setState( { error } ) )
}

render() {

    if(this.state.error) {
        return <div>{this.state.error.toString()}</div>
    }
    return (
        <div style={{ fontSize: '14px', maxHeid .....}}>
            {countries.map((country, key) => (
                <div 
                    key = {Country.name + key}
                    onClick = { () => this.onClick(country.code) } // или так onClick = { this.onClick.bind(this, country.code) }
                    
                    style={{ 
                        backgraundColor: this.state.selectedCode === country.code}}
                        ? "Litegreen"
                        ?   ''

CountrySelect.propTypes = {
    maxHeight: 150,
    defaultCountry: 'UA',
                           
};

CountrySelect.propTypes = {
    maxHeight: PropTypes.number.isRequired,
    defaultCountry: PropTypes.string,
    /*
    children: PropTypes.node,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    obj: PropTypes.object,
    custom: PropTypes.shape({
        a: PropTypes.number,
        b: PropTypes.string,
    })
    */
};

ReactDOM.render(
    <div className="parent">
        <CountrySelect 
            maxHeight={100}
            myProp={<div>Hello</div>}
            defaultCountry = 'AL'
        />
        <CountrySelect maxHeight={150} />
    </div>,
    document.getElementById('root'),
);


// ======

class Kubik {

    static rubik() {
        console.log('Yeah!')
    }
}

Kubik.rubik();



///

lass CountrySelect extends React.Component {
    constructor(props) {
        super(props);

        if(CountrySelect.Countries) {

        } else {
            CountrySelect.countries = fetch('/countries.js')
            .then(res => res.json())
        }

        CountrySelect.Countries      
            .then(countries => this.setState({ countries }))
            .catch(error => this.setState( { error } ) )

        this.state = {
            selectedCode: '',
            countries: [],
            error: false,
        };

        

    }

    onClick(code) {
        this.setState( {selectedCode: code} );
    }

