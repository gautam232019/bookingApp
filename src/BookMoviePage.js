import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Movie.css"
import {Redirect} from "react-router-dom"

const BookMoviePage = () => {

  const nextPage = () => {
    return <Redirect to="/home"/>
  }
    return(

    <div>
      <button onClick={nextPage} className="btn btn-lg btn-block btn-dark" id="button-id" type="button">Book Now!</button>
    </div>
    )
}

export default BookMoviePage