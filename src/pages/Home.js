import React,{ useState, useContext } from "react"
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"
import SeatAvailability from "./SeatManagement/SeatAvailability"
import SeatMatrix from "./SeatManagement/SeatMatrix"
import firebase from "firebase/app"
import "firebase/database"
import MovieDetail from "../MovieDetail"
import { Redirect } from "react-router-dom";
import MovieContext from '../context/MovieContext'
import "../App.css"

const Home =() => {
var details,alreadyBooked = false
details = JSON.parse(localStorage.getItem("dbusers"));
const context = useContext(UserContext)

const [seatno,setSeatno] = useState(0);

const submit = () => {
	var mySeats = localStorage.getItem("mySeats")
	console.log(mySeats);
	var myEmail = context.user?.email;
	console.log(myEmail);
	var user = "user"+(Object.keys(details.users).length+1);
    var userRef = firebase.database().ref("users/")
    
     var obj = {
		email: myEmail,
		seatno: mySeats,
	}
	console.log(obj);
	userRef.push(
		obj
	)
}
for(let key in details.users){
	let a = details.users[key]
	//data.push(parseInt(a.seatno))
  if(context.user?.email === a.email){
	  console.log("user+"+context.user?.email);
	  console.log(a.email);
     alreadyBooked = true;
  }
}
    if(!context.user?.uid){
        return <Redirect to="/signin"/>
      }
    return(
    <section className="main container">
				<SeatMatrix />
				{alreadyBooked? null : <SeatAvailability/> }
    <div onClick={submit} className= {alreadyBooked?"hidden": "button"}><a href="#">
        <p><span className="bg"></span><span className="base"></span><span className="text">Book Now!</span></p>
    </a>
	</div>
	</section>
    )
}

export default Home