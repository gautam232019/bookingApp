import React,{useState,useContext} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import Dualinfoblock from "./Dualinfoblock"
import {UserContext} from "./context/UserContext"

import Header from "./layout/Header"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import firebaseConfig from "./config/firebaseConfig"
import MovieDetail from "./MovieDetail"
import {Redirect} from "react-router-dom"

firebase.initializeApp(firebaseConfig);

function App() {
  const [user,setUser] = useState(null);
  
  var ref = firebase.database().ref();
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    localStorage.setItem("dbusers",JSON.stringify(snapshot.val()));
  }, function(error) {
    console.log("Error: " + error.code);
  });
  
  
  return (
    <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/home" component={MovieDetail}/>
        <Route exact path="*" component={PageNotFound}/>
      </Switch>
    </UserContext.Provider>
    </Router>
  )
}

export default App;
