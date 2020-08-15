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
    const fetchData=async ()=>{
        const data=await db.collection('feedback').get()
        setData(data.docs.map(doc=>doc))
        const resp=await db.collection('response').get()
        setResponse(resp.docs.map(doc=>doc.data()))
    }
    fetchData()
    }, [])
    const deleteValue=()=>{
        console.log(id)
        db.collection('feedback').doc(id).delete();
    }
    const addValue=()=>{
        console.log(value)
        db.collection('feedback').add({
            Count:0,
            Name:value
        })
        // setData(...itemdata,{Name:value,Count:0})
    }
    return (
        <div className='AdminContainer'>
            <h2>Admin Page</h2>
            <form  className='formContainer' onSubmit={deleteValue}>
            <p>Available options:</p>
            {itemdata.map(dt=>(
            <span key={dt.id} className='formOption'> 
            <input type='radio' id={dt.id} value={dt.data().Name} name='feedbackvalue' onChange={()=>setId(dt.id)}/>
            <label htmlFor={dt.id} className='feedbackLabel'>{dt.data().Name}</label>
            <label htmlFor={dt.id} className='feedbackLabel'>Count:{dt.data().Count}</label>
            </span>
            ))}
            <button type='submit' className='submitButton' className='removeButton'>Remove</button>
        </form>
        <h3>Add Value</h3>
        <form onSubmit={addValue}>
            <input type='text' onChange={e=>setValue(e.target.value)} value={value} className='inputTexts'/>
            <button type='submit' className='addButton'>Add+</button>
        </form>
        <h3>User Response</h3>
            {response.map(dt=>(
                <div key={dt.user} className='responseSection'>
                <span>User:{dt.user}</span>
                <span>Option:{dt.optionSelected}</span>
                </div>
            ))}
        </div>
    )
}

export default Admin
