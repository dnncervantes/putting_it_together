import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.age);
        this.state = {
            age: this.props.age
        }
        // console.log(this.props.state);
    }
    bdayClicker = () => {
        this.setState({
            age: this.state.age + 1
        })
            // console.log(this.state.age);
        }

    render() {
        const {lastName, firstName, age, hairColor} = this.props;
        return(
            <div>
                <h1>
                {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={ () => this.bdayClicker()}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;