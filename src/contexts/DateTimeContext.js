import React, {Component, createContext} from "react"

export const DateTimeContext = createContext()

class DateTimeContextProvider extends Component {

	state = {
			currentTime: 0,
			currentDate: 0
	}

	checkTime = (i) => {
		return (i < 10) ? "0" + i : i;
	}

	updateClock = () => {
		this.setState({
			currentTime: this.checkTime(new Date().getUTCHours()) + ":" + this.checkTime(new Date().getUTCMinutes()),
			currentDate: new Date().toUTCString().substring(0, 16)
		})
	}

	componentDidMount() {
		this.updateClock()
		const clockInterval = setInterval(() => {
				this.updateClock()
			}, 5000)
			return () => {
				clearInterval(clockInterval)
			}
	}

	render = () => {
		return (
			<DateTimeContext.Provider value={{...this.state}}>
				{this.props.children}
			</DateTimeContext.Provider> 
		)
	}
}

export default DateTimeContextProvider