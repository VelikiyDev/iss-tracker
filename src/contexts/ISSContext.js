import React, {Component, createContext} from "react"

export const ISSContext = createContext()

class ISSContextProvider extends Component {
	state = {
		coordinates: {
			lat: 0,
			lng: 0
		},
		isLoading: false
	}

	handleErrors = (response) => {
		if (!response.ok) {
			throw Error(response.statusText)
		}
		this.props.setIsError(false)
		return response
	}

	updateData = () => {
		fetch("https://api.wheretheiss.at/v1/satellites/25544")
		.then(this.handleErrors)
		.then(res => res.json())
		.then(result => {
			this.setState({
				coordinates: {lng: Number(result.longitude), lat: Number(result.latitude)},
				isLoading: false
			})
		})
		.catch(error => {
			this.props.setIsError(true)
			console.log(error)
		})
	}

	componentDidMount() {
		this.updateData()
		this.setState({
			isLoading: true
		})

		this.interval = setInterval(() => this.updateData(), 5000)
	}

	componentWillUnmount() {
		return () => {
			clearInterval(this.interval)
		}
	}
	render = () => {
		return (
			<ISSContext.Provider value={{...this.state}}>
				{this.props.children}
			</ISSContext.Provider> 
		)
	}
}

export default ISSContextProvider