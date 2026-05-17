import React from 'react'
import {useState} from "react"

import {Link} from 'react-router-dom'

import { useNavigate } from "react-router-dom"

//for every text box we need to use the state to print value in console from the forms given below(step2)
//we will get the data from forms
//____________________________________________________________________________________________________________________________
function Reg(){
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[number,setnumber]=useState("");
    const[password,setpassword]=useState("");
    const[confirmpassword,setconfirmpassword]=useState("");
    const navigate = useNavigate();




//_________________________________to display data(step5)__________________________________________________________________

function tosubmit(event){
    //______________________________to prevent page from refresh we use event(step6)________________________________
    event.preventDefault();
    //validations(step7)
    //(step7)_______________________________________________________________________________________________________________________________________________________
    if(name.trim()=="" ||  email=="" || number=="" || password=="" || confirmpassword==""){
        alert("please fill the details")
        return
    }
    //-----------------------------------------------------------------------------------------------------------
    if(password!==confirmpassword){
        alert("the password is not matching")
        return
    }
    //________________________________________________________________________________________________________________________________________________________

    let obj={
        name,
        email,
        number,
        password,
        confirmpassword
    }
    console.log(obj);
    alert("registration is successful!");

    //__________________________________________________________________________________________________________________________________________________________
    //__________________________________step(11)_________________________________________________-
    //redirect Login
    navigate("/login")

    //_______________to make form empty after print in console___________________________step(8)____________________________-
    setname("");
}

return(

//___________________________________________________________________________________________________________________________


    <div>
        Reg
         {/*_____________________________________Registration form(step1)_________________________________________________*/}
         {/* directly taking onchange not in function(step3) */}
         {/*(step4)-submit better than using onclick and it is used in button*/}
        <form className="form" onSubmit={tosubmit}> 
            <input type="text" placeholder="Enter the name" onChange={(event)=>setname(event.target.value)} value={name}/>
            <input type="email" placeholder="Enter the email" onChange={(event)=>setemail(event.target.value)} value={email}/>
            <input type="number" placeholder="Enter number" onChange={(event)=>setnumber(event.target.value)} value={number}/>
            <input type="password" placeholder="Enter password" onChange={(event)=>setpassword(event.target.value)} value={password}/>
            <input type="password" placeholder="Re-type password" onChange={(event)=>setconfirmpassword(event.target.value)} value={confirmpassword}/>
            {/* in state avriable data is emptying and not dispalying so use the value___________________________________(step9) */}
            <button className="btn">Reg Now</button>
            {/* ______________________________________________(step10) */}
        <p>
            already registered?
            <Link to="/login">Login</Link>
        </p>

        </form>

         {/*___________________________________________________________________________________________________________*/}









    </div>
  )

}


export default Reg