import React, { useState,useEffect} from 'react'
import Progress from './Progress'
import './ProgressBar.css';
import { MIN} from "./constants";

const ProgressBar = () => {

    const [value, setValue] =useState(MIN);
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            setValue((val)=>val+1);
        },100) 
    },[])
  return (
    <div className='progress__bar'>
        <h1>ProgressBar</h1>
        <Progress value={value } onComplete={()=>{setSuccess(true)}}/>
        <span style={{color: success ? "green" : "red"}}>{
            success ? "Complete!" : "Loading!!!"
            }</span>
    </div>
  )
}

export default ProgressBar