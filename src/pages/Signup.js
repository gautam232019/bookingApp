import React,{useState,useContext} from "react"
import User from "../img/mainUser.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

import {UserContext} from "../context/UserContext"
import "firebase/auth"
import firebase from "firebase/app"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"


const Signup = () => {

    const context = useContext(UserContext);
    
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleSignup = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then( res => {
          console.log(res);
          //important
          context.setUser({email: res.user.email,uid:res.user.uid})
          toast("Account successfully created!",{type:"success"})
        })
        .catch(error => {
          console.log(error);
          toast(error.message,
            {type:"error"})
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
                         <input value={email} type="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Register with Email"></input>
                        </div>
                        <div className="form-group">
                         <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Create a Password"></input>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn"><i className="fas fa-sign-in-alt"></i>Sign Up</button>
                    </form>
    
                    </div>
                </div>
            </div>
    )
}

export default Signup