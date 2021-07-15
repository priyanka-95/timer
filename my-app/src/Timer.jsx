import React, {useState}from 'react'
import Button from './Button';
import styled from 'styled-components';
import StartTimer from './StartTimer';
import AddTimer from './AddTimer';

const Boxdiv = styled.div`
    border:1px solid grey;
    height:100px;
    width:150px;
    padding:20px;
    margin: auto;
`;

const Timer = () => {
    const [input ,setInput] = useState("");
    const[items,setItems] = useState([]);
    const itemEvent=(item)=>{
        setInput(item.target.value);
    }
    const addTimer=()=>{
        setItems((oldata)=>{
            return [...oldata,Number(input)]
        });
        console.log('hiiiiii');
        // let data=items;
        // data.push(Number(input));
        // setItems([...data]);
        setInput('');
    }
    const deleteTimer=(id)=>{
        setItems((oldItem)=>{
            return oldItem.filter((data)=>{
                console.log('index',oldItem.indexOf(data),id);
                return oldItem.indexOf(data)!==id;
            });
        });
    }
    
    const startTimer =(id)=>{
        setInterval(() => {
            let newdata= items;
            if(newdata[id]>0){
            newdata[id]=newdata[id]-1;
       setItems([...newdata]);
            }
       console.log(newdata);

      
    },1000); 
        // if(items>0){
        //     setInterval(() => {
        //         let setinterval=items;
        //         setinterval=setinterval.map((data)=>{
        //             console.log(data);
        //           data=data-1;
        //         })
        //         setItems(setinterval)},1000);
        // }
    }
    
    return (
        <div>
            <div>Time value:</div>
           {/* <input type="number" onChange={itemEvent} value={input}/>  */}
           <AddTimer addTimer={addTimer} itemEvent={itemEvent} input={input}/>
    <div>{items.map((itemVal,index)=>{
        return <Boxdiv><li>{itemVal}s</li>
       {/* <button onClick={()=>{startTimer(index,[...items])}}>start</button> */}
       <StartTimer startTimer={startTimer} index={index} />
        <button onClick={()=>{deleteTimer(index)}}>Delete</button>
        <button>Reset</button>
        </Boxdiv>
    })}</div>
        </div>
    )
}

export default Timer

