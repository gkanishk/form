import React,{useState,useEffect} from 'react'
import Showdata from './showData'
import { useForm } from "react-hook-form";

function Form() {
    const [formData,setData]=useState([]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setData(data);
    }
    useEffect(() => {
    console.log("Mount Completed");
    }, [formData])
    
    return (
        <div style={{textAlign:"center"}}>
        <div style={{backgroundColor:"#EFF3FE",opacity:"80%",borderRadius:"25px",textAlign:"center",height:"300px",width:"500px",padding:"20px",marginLeft:"350px",marginTop:"50px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:'flex',flexDirection:'column',width:'500px',textAlign:'center'}}>
                <input type='text' name='first' placeholder='First Name' ref={register}/>
                <input type='text' name='last' placeholder='LastName' ref={register}/>
                <input type='email' name='email' placeholder='Email' ref={register}/>
                <label style={{textAlign:'start'}}>Gender</label>
                <select name='gender'ref={register}>
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
                <input type='number' name='age' placeholder='Age' ref={register}/>
                <label style={{textAlign:'start',fontWeight:'700'}}>Marital Status:</label>
                <div style={{textAlign:'start'}}>
                <input type='radio' id='Maried' name='status' value='maried'ref={register}/>
                <label htmlFor='maried'>Maried</label>
                </div>
                <div style={{textAlign:'start'}}>
                <input type='radio' id='unmaried' name='status' value='unmaried'ref={register}/>
                <label htmlFor='unmaried'>Un-Maried</label>
                </div>
                <label style={{textAlign:'start',fontWeight:'700'}}>Qualification</label>
                <div style={{textAlign:'start'}}>
                <input type='checkbox' id='ten' name='qualify' value='ten'ref={register}/>
                <label htmlFor='ten'>10th</label>
                </div>
                <div style={{textAlign:'start'}}>
                <input type='checkbox' id='twelve' name='qualify' value='twelve'ref={register}/>
                <label htmlFor='twelve'>12th</label>
                </div>
                <div style={{textAlign:'start'}}>
                <input type='checkbox' id='btech' name='qualify' value='btech'ref={register}/>
                <label htmlFor='btech'>Btech</label>
                </div>
                <button type='submit'>Submit</button>
                </div>
            </form>
            
        </div>
        <Showdata data={formData}/>
        </div>
    )
}

export default Form
// First Name
// Last Name
// Email Id
// Select Gender: Dropdown
// Select Age: Input number type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
// Select Marital Status: Radio Button
// Select Qualification: checkbox 10, 12, B.Tech