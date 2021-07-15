import React,{useState} from 'react'

const StartTimer = (props) => {
    // const[timer,setTimer] = useState(props.items)
    // console.log('timer',timer);
    // const startTimer =(id)=>{
    //     setInterval(() => {
    //         let newdata= timer;
    //         if(newdata[id]>0){
    //         newdata[id]=newdata[id]-1;
    //         setTimer([...newdata]);
    //         }
    //    console.log(newdata,'newdata');

      
    // },1000); 
//} 
    return (
        <div>
            <button onClick={()=>{props.startTimer(props.index)}}>start</button> 
        </div>
    )
}

export default StartTimer
