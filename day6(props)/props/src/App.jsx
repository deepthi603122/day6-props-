import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Row from './components/Row'



function App() {
  

  const[friends,setfriends]=useState([
  {id: 1, name: "Deepthi",age: 22, email: "deepthi@gmail.com"},
  {id: 2,name: "Ravi",age: 24,email: "ravi@gmail.com"},
  {id: 3,name: "Kiran",age: 21,email: "kiran@gmail.com"}
  ])

   //function deleteItem(){
   function deleteItem(id){
    let newArr=friends.filter((item)=>{    //aplice wont work bcoz it doesn't have index
    if(item.id==id){
      return false;
    }
    return true;
  })
  setfriends(newArr)


    //console.log("delete fun")
    console.log(id)
  }

  let result=friends.map((item,ind)=>{
    return(
      <Row name={item.name} age={item.age} email={item.email} deleteItem={deleteItem} id={item.id} key={item.id}/>
    )
  })

 
 
  return(
    <div>
      {
        friends.length==0?
        "no data is there":

      <table border="1px">
        <tr>
        <th>name</th>
        <th>age</th>
        <th>email</th>
        </tr>
        {result}
      </table>
}
    </div>
  )
  


}

export default App
