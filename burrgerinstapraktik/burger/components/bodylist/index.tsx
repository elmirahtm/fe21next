"use client"
import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

const Burgermenu = () => {
    const [isClosed,setIsClosed]=useState(false)
    const toggleClosed=()=>{
      if (isClosed!==false) {
        document.body.style.backgroundColor="red"
      }
      else{
        document.body.style.backgroundColor="black"

      }
        // setIsClosed(!isClosed)
    }
  return (
    <div className='button'>
<button type='button' onClick={toggleClosed}>
<Hamburger toggled={isClosed} toggle={setIsClosed}/>
</button>
    </div>
  )
}

export default Burgermenu