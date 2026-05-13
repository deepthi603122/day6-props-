import React from 'react'

function Row({name,age,email, id, deleteItem}) {
    return(
    <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{email}</td>
        {/* <button onClick={deleteItem}> */}
        <button onClick={()=>deleteItem(id)}>
            Delete
        </button>
    </tr>
    )
  
}

export default Row