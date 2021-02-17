import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Dualinfoblock from "./Dualinfoblock"
import Home from "./pages/Home"
import firebase from "firebase/app";
import "firebase/database";


const MovieDetail = () => {

var detail = JSON.parse(localStorage.getItem("dbusers"));

var info = detail.cast1 + "\n" + detail.cast2 + "\n" +detail.cast3;
    return(
        <div>
        <Dualinfoblock movieName={detail.Moviename} info={info} heading="Movie this week" source={detail.ImageUrl} alt="image not found"/>
        <Home/>
        </div>
    )
}

export default MovieDetail