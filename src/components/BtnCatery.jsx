import React from 'react'

function BtnCatery({item, hdlClickCatagories}) {
  return (
    <button className='bg-amber-300 px-4 py-3 rounded-xl hover:bg-blue-200 cursor-pointer'
    onClick={()=> hdlClickCatagories(item)}
    >{item}</button>
  )
}

export default BtnCatery