"use client"
import * as math from "mathjs"
import React, { useState } from 'react'
import Button from '../button'

const Resulttext = () => {
    const [text,settext]=useState("")
    const [result,setresult]=useState("")
 
    const addtext=(val:any)=>{
settext((text:any):any=>[...text,val +""])
 }
 
const calculatemath=()=>{
const input=text.join("")
setresult(math.evaluate(input))
}

 const resetinput=()=>{
    settext("")
    setresult("")
 }

    return (
    <div className='anaelement'> 
<div className='resulttext'>
    <div className="result">
        <h1>{result}</h1>
    </div>
    <div className="text">
        <h3>{text}</h3>
    </div>
<div className="rows">
<div className='row'>
<Button  symbol={"C"}   handleclick={resetinput} /> 
<Button  symbol={"%"}   handleclick={addtext}  /> 
<Button  symbol={"+/-"} handleclick={addtext}  /> 
<Button  symbol={"÷"} color="orange" handleclick={addtext}   /> 

    </div>

<div className='row'>
<Button  symbol={"7"} handleclick={addtext}  /> 
<Button  symbol={"8"} handleclick={addtext}   /> 
<Button  symbol={"9"} handleclick={addtext}   /> 
<Button  symbol={"*"} color="orange" handleclick={addtext}  /> 

    </div>
    <div className='row'>
<Button  symbol={"4"} handleclick={addtext}  /> 
<Button  symbol={"5"} handleclick={addtext}  /> 
<Button  symbol={"6"} handleclick={addtext}  /> 
<Button  symbol={"-"} color="orange" handleclick={addtext}   /> 

    </div>
    <div className='row'>
<Button symbol={"1"}  handleclick={addtext} /> 
<Button symbol={"2"}  handleclick={addtext} /> 
<Button symbol={"3"}  handleclick={addtext} /> 
<Button symbol={"+"} color="orange" handleclick={addtext} /> 

    </div>
    <div className='row'>
<Button symbol={"0"} handleclick={addtext} /> 
<Button symbol={"."} handleclick={addtext} /> 
<Button symbol={"="} handleclick={calculatemath} /> 
<Button symbol={"/"} color="orange" handleclick={addtext}  /> 

    </div>
</div>

</div>
    </div>
  )
}

export default Resulttext