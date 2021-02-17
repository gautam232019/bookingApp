import React from "react"
import Seat from './Seat'

const SeatAvailability = () => {
	return (
		<div>
		<div className="row">
			Unoccupied : <Seat reserved="seat-blue" /> 
		</div>
		<div className="row">
			Occupied : <Seat reserved="seat-red" />
		 </div>
		<div className="row">
			Your selected seat : <Seat reserved="seat-black"/>
		</div>
		</div>
	)
}

export default SeatAvailability