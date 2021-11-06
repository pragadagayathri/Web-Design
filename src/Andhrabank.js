import React from 'react'

export default function Andhrabank(props) {
    return (
        <div>
           <h1>Andhrabank is located at {props.location} with the account name of {props.data.name} and with age {props.data.age}</h1> 
        </div>
    )
}
