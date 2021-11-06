import React, { Component } from 'react'

export default class Data extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"Gayathri"
        }
    } 
    render() {
        setTimeout(()=>{
            this.setState({name:"Gayathri P"})
        },5000)
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
