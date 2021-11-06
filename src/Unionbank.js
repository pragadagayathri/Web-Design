import React from 'react'
import Andhrabank from './Andhrabank'
import Cooperationbank from './Cooperationbank'

export default function Unionbank() {

    let initialdata={
        name:"Gayathri",
        age:18
    }
    
    return (
        <div>
            <h1>GAYATHRI</h1>
            <Andhrabank location="guntur" data={initialdata}/>
            <Cooperationbank location="Kakinada" data={initialdata}/>
            
        </div>
    )
}
