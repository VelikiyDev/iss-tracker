import React, { useState } from "react"
import Map from "../Map"
import Time from "../Time"
import Coordinates from "../Coordinates"
import DateTimeContextProvider from "../../contexts/DateTimeContext"
import ISSContextProvider from "../../contexts/ISSContext"
import ErrorMessage from "../ErrorMessage"

function App() {
	const [isError, setIsError] = useState(false)

	return (
		<div className="wrapper">
			{<ErrorMessage className={isError ? "errorMessage fade-in-top" : "errorMessage fade-out-top"} message="Error fetching data 😟 Retrying..."/>}
			<div className="grid">
				<DateTimeContextProvider>
					<ISSContextProvider setIsError={setIsError}>
						<Coordinates />
						<Time />
						<Map />
					</ISSContextProvider>
				</DateTimeContextProvider>
			</div>
		</div>
	)
}

export default App