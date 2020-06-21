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
        <div style={{backgroundColor:"#EFF3FE",opacity:"80%",borderRadius:"25px",textAlign:"center",height:"400px",width:"500px",padding:"20px",marginLeft:"350px",marginTop:"50px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:'flex',flexDirection:'column',width:'500px',textAlign:'center',justifyContent:"space-around"}}>
                <label style={{textAlign:'start',fontWeight:700}}>Name:</label>
                <input type='text' name='first' placeholder='First Name' ref={register} style={{marginTop:'5px',border:'2px solid #FFB7CF',borderRadius:'4px'}} />
                <input type='text' name='last' placeholder='LastName' ref={register} style={{marginTop:'5px',border:'2px solid #FFB7CF',borderRadius:'4px'}} />
                <label style={{textAlign:'start',fontWeight:700}}>Email:</label>
                <input type='email' name='email' placeholder='Email' ref={register} style={{marginTop:'5px',border:'2px solid #FFB7CF',borderRadius:'4px'}} />
                <label style={{textAlign:'start',fontWeight:700}}>Gender</label>
                <select name='gender'ref={register} style={{border:'2px solid #FFB7CF',borderRadius:'4px'}}>
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
                <label style={{textAlign:'start',fontWeight:700}}>Age</label>
                <input type='number' name='age' placeholder='Age' ref={register} style={{marginTop:'5px',border:'2px solid #FFB7CF',borderRadius:'4px'}} />
                <label style={{textAlign:'start',fontWeight:'700'}}>Marital Status:</label>
                <div style={{textAlign:'start'}}>
                <input type='radio' id='Maried' name='status' value='Maried'ref={register}/>
                <label htmlFor='Maried'>Maried</label>
                </div>
                <div style={{textAlign:'start'}}>
                <input type='radio' id='unmaried' name='status' value='Unmaried'ref={register}/>
                <label htmlFor='Unmaried'>Un-Maried</label>
                </div>
                <label style={{textAlign:'start',fontWeight:'700'}}>Qualification</label>
                <div style={{textAlign:'start'}}>
                <input type='checkbox' id='ten' name='qualify' value='10th 'ref={register}/>
                <label htmlFor='10th '>10th</label>
                </div>
                <div style={{textAlign:'start'}}>
                <input type='checkbox' id='twelve' name='qualify' value='12th 'ref={register}/>
                <label htmlFor='12th '>12th</label>
                </div>
                <div style={{textAlign:'start'}}>
                <input type='checkbox' id='btech' name='qualify' value='Btech'ref={register}/>
                <label htmlFor='Btech'>Btech</label>
                </div>
                <div style={{textAlign:"center"}}><button type='submit' style={{color:"blue",backgroundColor:"#FFB7CF",width:'100px',borderRadius:'25px',padding:'5px',fontWeight:700}}>Submit</button></div>
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