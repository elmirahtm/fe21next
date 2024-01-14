import React from 'react'
import Resulttext from '../resulttext'

const Button = ({symbol,color,handleclick}:any) => {
  return (
    <div onClick={()=>handleclick(symbol)} className='button-wrapper' style={{backgroundColor:color}}>
        {symbol}
    </div>
  )
}

export default Button