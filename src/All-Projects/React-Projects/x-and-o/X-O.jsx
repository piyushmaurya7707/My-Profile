
import React from 'react'
import './X-O.css';


import { useState } from 'react';

export default function XO()  {
    const [xo , setXo] = useState("");
     
    const Xo = (a)=> {
        a=true;
     a=!a;
   a= a?"X":"O";
        
        setXo(a);

    }


  return (
    <>

    <div className='container'>
        <div className='row1'>
     <button className='btnx' onClick={() => Xo()}>{xo}</button>
     <button className='btnx' onClick={() => Xo()}>{xo}</button>
     <button className='btnx'>x</button>
        </div>

        <div className='row2'>
<button className='btnx'>x</button>
<button className='btnx'>x</button>
<button className='btnx'>x</button>
        </div>
        
        <div className='row3'>
<button className='btnx'>x</button>
<button className='btnx'>x</button>
<button className='btnx'>x</button>
        </div>
    </div>
    
    
    </>
  )
}
