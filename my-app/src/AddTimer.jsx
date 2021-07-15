import React from 'react'

function AddTimer(props) {
    return (
        <div>
            <input type="number" onChange={props.itemEvent} value={props.input}/> 
            <button onClick={props.addTimer}>start</button> 
        </div>
    )
}

export default AddTimer
