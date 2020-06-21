import React from 'react'

function Showdata(props) {
    return (
        <div style={{backgroundColor:'#EFF3FE',opacity:'60%',width:'500px',marginLeft:'350px',padding:'20px',marginTop:'20px',borderRadius:'25px'}}>
            <p>First Name: {props.data.first}</p>
            <p>Last Name: {props.data.last}</p>
            <p>Gender {props.data.gender}</p>
            <p>Email: {props.data.email}</p>
            <p>Age: {props.data.age}</p>
            <p>Marital Status: {props.data.status}</p>
            <p>Qualification:{props.data.qualify}</p>
        </div>
    )
}

export default Showdata
