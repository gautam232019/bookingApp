import React,{useState,useContext} from "react"
import User from "../img/mainUser.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

import firebase from "firebase/app"
import "firebase/auth"
import {UserContext} from "../context/UserContext"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

const Signin = () => {
    
const context = useContext(UserContext)

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
   
const handleSignup = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then( res => {
      console.log(res);
      //important
      context.setUser({email: res.user.email,uid:res.user.uid})
      toast("Successfully signed in!",{type:"success"})
    })
    .catch(error => {
      console.log(error);
      toast(error.message,{type:"error"})
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleSignup()
  }
  
  if(context.user?.uid){
    return <Redirect to="/home"/>
  }
    

    return(
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                       <div className="col-12 user-img">
                           <img src={User}/>
                       </div>
                    <form className="col-12">
                        <div className="form-group">
                         <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email"></input>
                        </div>
                        <div className="form-group">
                         <input  value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Password"></input>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn"><i className="fas fa-sign-in-alt"></i>Login</button>
                    </form>
    
                    </div>
                </div>
            </div>
        )
}

export default Signin