import React from 'react'

function Showdata(props) {
    console.log(props)
    return (
        <div style={{backgroundColor:'#EFF3FE',opacity:'60%',width:'400px',marginLeft:'400px',padding:'20px',marginTop:'20px',borderRadius:'25px'}}>
        <div style={{textAlign:'start'}}>
            <div style={{display:'flex',justifyContent:'flex-between'}}>
                <div style={{width:'110px'}}>First Name:</div>
                <div style={{flexGrow:'2'}}>{props.data.first}</div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-between'}}>
                <div style={{width:'110px'}}>Last Name:</div>
                <div style={{flexGrow:'2'}}>{props.data.last}</div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-between'}}>
                <div style={{width:'110px'}}>Gender:</div>
                <div style={{flexGrow:'2'}}>{props.data.gender}</div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-between'}}>
                <div style={{width:'110px'}}>Email:</div>
                <div style={{flexGrow:'2'}}>{props.data.email}</div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-between'}}>
                <div style={{width:'110px'}}>Age:</div>
                <div style={{flexGrow:'2'}}>{props.data.age}</div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-between'}}>
                <div style={{width:'110px'}}>Marital Status:</div>
                <div style={{flexGrow:'2'}}>{props.data.status}</div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-between'}}>
                <div style={{width:'110px'}}>Qualification:</div>
                <div style={{flexGrow:'2'}}>{props.data.qualify}</div>
            </div>
        </div>
        </div>
    )
}

export default Showdata
