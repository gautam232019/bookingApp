import React from 'react'
import { toast } from 'react-toastify'
import '../../Seat.css'

var data = [];
const Seat = (props) => {
  const seatNumber = props.seatno
  const style = props.reserved

  const seatClickHandler = (event, seatNumber) => {
    console.log(seatNumber + "seatSelected");
    event.stopPropagation()
    const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
    if (seatColor.contains("seat-red")) {
        toast("Already booked! Please select other one",{type:"warning"})
        console.log(seatNumber+" cannot be selected ");
    } else if(seatColor.contains("seat-blue")) {
        console.log(seatNumber+"selected");
        seatColor.remove("seat-blue")
        seatColor.add("seat-black")
        data.push(seatNumber)
        console.log(data);
    }
    else{
      console.log(seatNumber + " deselected")
      var deselectedIndex = data.indexOf(seatNumber);
      data.splice(deselectedIndex,1);
      console.log(data);
      seatColor.remove("seat-black")
      seatColor.add("seat-blue")
    }
    localStorage.setItem("mySeats",data);
  }
  
  console.log(data);
  return (
    <div className="col-2 col-md-2">
      <div className={`seat seat-${seatNumber} ${style}`}
        onClick={(e) => seatClickHandler(e, props.seatno)} />
    </div>
  )
}

export default Seat