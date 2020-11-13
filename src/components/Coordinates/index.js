import React from "react"
import { ISSContext } from "../../contexts/ISSContext"
import logo from "../../icon.svg"
function Coordinates(props) {
	return (
		<ISSContext.Consumer>{(context) => {
			const { coordinates } = context
			
			return (
				<div className="header container" style={{gridArea: "coords"}}>
					<div>
						<img src={logo} alt="Logo" id="logo"/>
						<div>
							<h3>ISS is currently located at:</h3>
							<div className="coordinates">
								<span>longtitude: {coordinates.lng}, latitude: {coordinates.lat}</span>
							</div>
						</div>
					</div>
				</div>
			)
		}}
		</ISSContext.Consumer>
	)
}

export default Coordinates