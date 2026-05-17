import React from 'react'
import {useState} from "react"
import {Link} from 'react-router-dom'

//for every text box we need to use the state to print value in console from the forms given below(step2)

function Login() {

        const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    function tologin(event) {
        event.preventDefault();

             if (email == "" || password == "") {
               alert("please fill the details")
               return
        }

     let obj = {email, password
        }
        console.log(obj);
        alert("the login is success!")

        setemail("");
        setpassword("");
    }

    return (

        <div> Login
          <form className="form" onSubmit={tologin}>
               <input type="email" placeholder="Enter ur mail" onChange={(event)=> setemail(event.target.value)} value={email}/>
            <input type="password" placeholder="Enter password" onChange={(event)=> setpassword(event.target.value)} value={password}/>
                <button className="btn">Login</button>

                <p> if u dont have the account
                                   <Link to="/reg">Register</Link>
                </p>
                </form>
        </div>
    )
}

export default Login