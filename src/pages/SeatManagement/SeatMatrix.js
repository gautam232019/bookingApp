import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../../Seat.css";
import Seat from "./Seat";
var data = [];

const GenerateSeats = (seatNumbers) => {
  //console.log(data);
  return (
    <div className="row">
      {seatNumbers.map((seatNumber) => {
        var style = "";
        if (data.includes(seatNumber)) {
          style = "seat-red";
        } else {
          style = "seat-blue";
        }
        console.log(seatNumber + style);
        return <Seat reserved={style} seatno={seatNumber} key={seatNumber} />;
      })}
    </div>
  );
};

const SeatMatrix = () => {
  const context = useContext(UserContext);
  var alreadyBooked = false;
  var details = JSON.parse(localStorage.getItem("dbusers"));
  console.log("log 2");
  console.log(details);

  for (let key in details.users) {
    let a = details.users[key];
    var split = a.seatno.split(",");
    console.log(split);
    split.forEach((element) => {
      data.push(parseInt(element));
    });
    if (context.user?.email === a.email) {
      return (
        <div className="container2">
          <h1>Your Seat no {a.seatno} already booked!</h1>
        </div>
      );
    }
  }
  console.log(data);
  localStorage.setItem("resrvedSeats", JSON.stringify(data));

  return (
    <div className="movie-complex">
      <div className="container2">
        <div className="screen"></div>
      </div>
      <div className="container row movie-layout">
        <div className="movie-column-2">
          {GenerateSeats([1, 2, 3, 4, 5])}
          {GenerateSeats([6, 7, 8, 9, 10])}
          {GenerateSeats([11, 12, 13, 14, 15])}
          {GenerateSeats([16, 17, 18, 19, 20])}
          {GenerateSeats([21, 22, 23, 24, 25])}
          {GenerateSeats([26, 27, 28, 29, 30])}
          {GenerateSeats([31, 32, 33, 34, 35])}
          {GenerateSeats([36, 37, 38, 39, 40])}
          {GenerateSeats([41, 42, 43, 44, 45])}
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
