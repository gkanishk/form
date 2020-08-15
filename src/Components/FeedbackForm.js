import React from 'react'
import firebase from '../firebase';
import {useHistory} from 'react-router-dom'

function FeedbackForm(prop) {
    const [sumitData,setSubmit]=React.useState({value:'',id:'',count:0});
    const [useremail,setEmail]=React.useState({email:''});
    let history=useHistory();
    const submiFunction=(e)=>{
        const db=firebase.firestore();
        if(sumitData.id!=='other'){
            console.log(typeof(sumitData.count), sumitData.count)
        db.collection('feedback').doc(sumitData.id).update({Count:parseInt(sumitData.count)+1})
        db.collection('response').add({
            optionSelected:sumitData.value,
            optionId:sumitData.id,
            type:'Predefined',
            user:useremail.email
        })}
        else{
            db.collection('response').add({
                optionSelected:sumitData.value,
                optionId:sumitData.id,
                type:'Other',
                user:useremail.email
            })
        }
        e.preventDefault()
        // history.push('/thankyou');
    }
    return (
        <form onSubmit={submiFunction} className='formContainer'>
            <span className='formOption'>
            <label>Email:</label><br/>
            <input type='email' onChange={e=>setEmail({email:e.target.value})}placeholder='Enter Email' value={useremail.email} className='inputText'/>
            </span>
            <p>Choose options:</p>
            {prop.data.map(dt=>(
            <span key={dt.id} className='formOption'> 
            <input type='radio' id={dt.id} value={dt.data().Name} data-count={dt.data().Count} size={dt.data().Count} name='feedbackvalue' onChange={e=>{setSubmit({value:e.target.value,id:e.target.id,count:e.currentTarget.dataset.count});console.log(e.currentTarget.dataset.count)}}/>
            <label htmlFor={dt.id}>{dt.data().Name}</label>
            </span>
            ))}
            <span className='formOption'>
            <input type='radio' id="other" name='feedbackvalue'/>
            <label htmlFor='other'>Other</label><br/>
            <input type='text' id="other" name='feedbackvalue' placeholder="Other" onChange={e=>setSubmit({value:e.target.value,id:e.target.id})} className='inputText'/>
            </span>
            <button type='submit' className='submitButton'>Submit</button>
        </form>
    )
}

export default FeedbackForm
