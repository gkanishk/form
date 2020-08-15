import React,{useEffect,useState} from 'react'
import firebase from '../firebase'
import './Admin.css'

function Admin() {
    const [itemdata,setData]=useState([]);
    const [response,setResponse]=useState([]);
    const [id,setId]=useState('');
    const [value,setValue]=useState('');
    const db=firebase.firestore();
    useEffect(() => {
    db.collection('feedback').onSnapshot(data=>{
        setData(data.docs.map(doc=>doc))
    })
    db.collection('response').onSnapshot(data=>{
        setResponse(data.docs.map(doc=>doc.data()))
    })
    }, [])
    const deleteValue=(e)=>{
        console.log(id)
        db.collection('feedback').doc(id).delete();
        e.preventDefault()
    }
    const addValue=()=>{
        console.log(value)
        db.collection('feedback').add({
            Count:0,
            Name:value
        })
        setValue('');
    }
    return (
        <div className='AdminContainer' key='adminContainer'>
            <h2>Admin Page</h2>
            <form  className='formContainer' onSubmit={deleteValue}>
            <p>Available options:</p>
            {itemdata.map(dt=>(
            <span key={`options+${dt.id}`} className='formOption'> 
            <input type='radio' id={dt.id} value={dt.data().Name} name='feedbackvalue' onChange={()=>setId(dt.id)}/>
            <label htmlFor={dt.id} className='feedbackLabel'>{dt.data().Name}</label>
            <label htmlFor={dt.id} className='feedbackLabel'>Count:{dt.data().Count}</label>
            </span>
            ))}
            <button type='submit' className='submitButton' className='removeButton'>Remove</button>
        </form>
        <h3>Add Value</h3>
            <input type='text' onChange={e=>setValue(e.target.value)} value={value} className='inputTexts'/>
            <button onClick={addValue} className='addButton'>Add+</button>
        <h3>User Response</h3>
            {response.map((dt,i)=>(
                <div key={`user${dt.user}`+i} className='responseSection'>
                <span>User:{dt.user}</span>
                <span>Option:{dt.optionSelected}</span>
                </div>
            ))}
        </div>
    )
}

export default Admin
