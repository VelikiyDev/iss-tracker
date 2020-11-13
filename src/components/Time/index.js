import React from "react"
import { DateTimeContext } from "../../contexts/DateTimeContext"

function Time(props) {
	return (
		<DateTimeContext.Consumer>{(context) => {
			const { currentDate, currentTime } = context
			return (
				<div className="header container" style={{gridArea: "datetime"}}>
					<div>
						<div>
							<h3>Current UTC time: {currentTime}</h3>
							<span>Date: {currentDate}</span>
						</div>
					</div>
				</div>
			)
		}}
		</DateTimeContext.Consumer>
	)
}

export default Time