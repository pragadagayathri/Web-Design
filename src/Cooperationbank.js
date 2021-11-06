import React, { Component } from 'react'

export default class Cooperationbank extends Component {
    render(props) {
        return (
            <div>
                <h1>Co-Operationbank is located at {this.props.location} with the account name of {this.props.data.name} and with age {this.props.data.age} </h1>
            </div>
        )
    }
}
