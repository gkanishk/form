import React,{useEffect,useState} from 'react'
import firebase from '../../firebase'
import FeedbackForm from '../FeedbackForm'

function UserRight() {
    const [itemdata,setData]=useState([]);
    
    useEffect(() => {
    const fetchData=async ()=>{
        const db=firebase.firestore();
        const data=await db.collection('feedback').get()
        setData(data.docs.map(doc=>doc))
    }
    fetchData()
    }, [])
    return (
        <div className='card'>
            <h2>
                FEEDBACK FORM
            </h2>
            <p className='formtitle'>Our team is trying their best to serve, please tell us where we lag?</p>
            <FeedbackForm data={itemdata}/>
        </div>
    )
}

export default UserRight
