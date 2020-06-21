import React from 'react'

function Showdata(props) {
    return (
        <div>
            <p>{props.data.first}</p>
            <p>{props.data.last}</p>
            <p>{props.data.gender}</p>
            <p>{props.data.email}</p>
            <p>{props.data.age}</p>
            <p>{props.data.status}</p>
            <p>{props.data.qualify}</p>
        </div>
    )
}

export default Showdata
