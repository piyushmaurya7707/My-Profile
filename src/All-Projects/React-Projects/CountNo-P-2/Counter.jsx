import React from 'react'
import './Counter.css';
import { useState } from 'react';
export default function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [godname, setGodName] = useState("");
    const [goal, setGoal] = useState(0);
    const [remaining, setRemaining] = useState(0);

    const handleGoal = () => {
        if (count == goal) {

            alert(`congratulations ${name} you have achieved your goal of ${goal} and your god name is ${godname}`);
        }
        else if (count < goal) {
            const remaining = goal - count;
            setRemaining(remaining);
        }
    }



    return (




        <>

            <div className='container-box'>

                <div className='display'>{count}</div>                


             
             <button className='button' onClick={() => { setCount(count + 1); handleGoal(); }} >+</button>
                
                <div className='container-input'>
                <div className='name-input'>
                    <input className='goal' value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Enter your name' />

                

                <input className='goal' value={godname} onChange={(e) => { setGodName(e.target.value) }} type="text" placeholder='Enter your godname' />


                <input className='goal' value={goal} onChange={(e) => { setGoal((e.target.value)); }} type="number" placeholder='0' />
                         






                         </div>
                
                
                <div className='counter-btn'>

                </div>
                <div className="input-display">
                    <h1 className="display-name">Your name is {name}</h1>
                    <h1 className="display-god">God name is {godname}</h1>

                    <h2 className="display-goal">Your goal is {goal}</h2>
                    <h2 className="display-count">Current count = {count}</h2>
                    <h2 className="display-remaining">Remaining = {remaining}</h2>
                </div>
                </div>
            </div>



        </>
    )
}
