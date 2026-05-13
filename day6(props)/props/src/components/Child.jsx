import React from 'react'

function Child({name,age}) {
  //console.log(props)
  name="sridevi"
  return (
    <div>this is child
      <h1>{name}</h1>
      <h1>{age}</h1>
      
      

    </div>
    
  )
}

export default Child